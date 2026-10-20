$port = 5500
$root = "D:\ladixitmoithailan"
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Prefixes.Add("http://127.0.0.1:$port/")

try {
    $listener.Start()
    Write-Output "Dev server running at: http://localhost:$port/"
} catch {
    Write-Output "Failed to start listener on port $port - Error: $_"
    exit 1
}

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".png"  = "image/png"
    ".svg"  = "image/svg+xml"
    ".json" = "application/json"
    ".md"   = "text/markdown; charset=utf-8"
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

        $cleanRel = $rawPath.TrimStart('/').Replace('/', [System.IO.Path]::DirectorySeparatorChar)
        $localPath = [System.IO.Path]::Combine($root, $cleanRel)

        if ([System.IO.File]::Exists($localPath)) {
            $ext = [System.IO.Path]::GetExtension($localPath).ToLower()
            $mime = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { "application/octet-stream" }
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
        # ignore client disconnects
    }
}
