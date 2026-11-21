param(
    [int]$port = 3000
)

$root = $PSScriptRoot
$listener = New-Object System.Net.HttpListener

# Try primary port or fallback
$started = $false
$maxTries = 5
for ($i = 0; $i -lt $maxTries; $i++) {
    $currentPort = $port + $i
    try {
        $listener.Prefixes.Clear()
        $listener.Prefixes.Add("http://localhost:$currentPort/")
        $listener.Prefixes.Add("http://127.0.0.1:$currentPort/")
        $listener.Start()
        $port = $currentPort
        $started = $true
        break
    } catch {
        # Try next port
    }
}

if (-not $started) {
    Write-Error "Failed to bind to ports $port-$($port + $maxTries - 1)"
    exit 1
}

Write-Output "Dev server running at: http://localhost:$port/"
Write-Output "Root directory: $root"

$mimeTypes = @{
    ".html"  = "text/html; charset=utf-8"
    ".css"   = "text/css; charset=utf-8"
    ".js"    = "application/javascript; charset=utf-8"
    ".jpg"   = "image/jpeg"
    ".jpeg"  = "image/jpeg"
    ".png"   = "image/png"
    ".svg"   = "image/svg+xml"
    ".webp"  = "image/webp"
    ".gif"   = "image/gif"
    ".json"  = "application/json"
    ".woff"  = "font/woff"
    ".woff2" = "font/woff2"
    ".ttf"   = "font/ttf"
}

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $rawPath = [System.Uri]::UnescapeDataString($request.Url.LocalPath)
        if ($rawPath -eq "/" -or [string]::IsNullOrWhiteSpace($rawPath)) {
            $rawPath = "/index.html"
        }

        # Remove leading slash
        $cleanRel = $rawPath.TrimStart('/').Replace('/', [System.IO.Path]::DirectorySeparatorChar)
        $localPath = [System.IO.Path]::Combine($root, $cleanRel)

        if ([System.IO.File]::Exists($localPath)) {
            $ext = [System.IO.Path]::GetExtension($localPath).ToLower()
            $mime = if ($mimeTypes.ContainsKey($ext)) { 
                $mimeTypes[$ext] 
            } elseif ($cleanRel -like "*webcake*v4*") {
                "application/javascript; charset=utf-8"
            } else { 
                "application/octet-stream" 
            }

            $content = [System.IO.File]::ReadAllBytes($localPath)

            $response.ContentType = $mime
            $response.ContentLength64 = $content.Length
            $response.StatusCode = 200
            $response.Headers.Add("Access-Control-Allow-Origin", "*")
            $response.Headers.Add("Cache-Control", "no-cache, no-store, must-revalidate")

            if ($request.HttpMethod -ne "HEAD") {
                $response.OutputStream.Write($content, 0, $content.Length)
            }
        } else {
            # Check if webcake script without extension
            if ($cleanRel -like "*webcake*v4*") {
                $targetFile = Join-Path $root "webcake\v4\f0ee6f35-6006-4f12-b6fe-528d3cc14ba6"
                if ([System.IO.File]::Exists($targetFile)) {
                    $content = [System.IO.File]::ReadAllBytes($targetFile)
                    $response.ContentType = "application/javascript; charset=utf-8"
                    $response.ContentLength64 = $content.Length
                    $response.StatusCode = 200
                    $response.Headers.Add("Access-Control-Allow-Origin", "*")
                    if ($request.HttpMethod -ne "HEAD") {
                        $response.OutputStream.Write($content, 0, $content.Length)
                    }
                    $response.Close()
                    continue
                }
            }

            $msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $rawPath")
            $response.ContentType = "text/plain; charset=utf-8"
            $response.ContentLength64 = $msg.Length
            $response.StatusCode = 404
            if ($request.HttpMethod -ne "HEAD") {
                $response.OutputStream.Write($msg, 0, $msg.Length)
            }
        }
        $response.Close()
    } catch {
        # ignore disconnects
    }
}
