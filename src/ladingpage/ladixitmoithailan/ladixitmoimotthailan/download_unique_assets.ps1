$content = [System.IO.File]::ReadAllText("$PSScriptRoot\original.html")
$pattern = 'https://(?:statics|content)\.pancake\.vn[^"''\)\s]+'
$matches = [System.Text.RegularExpressions.Regex]::Matches($content, $pattern)
$urls = $matches | ForEach-Object { $_.Value } | Select-Object -Unique

New-Item -ItemType Directory -Path "$PSScriptRoot\assets" -Force | Out-Null

$map = [ordered]@{}
$i = 1
foreach ($url in $urls) {
    $ext = ".jpg"
    if ($url -match '\.(png|jpg|jpeg|svg|webp|gif)($|\?)') {
        $ext = "." + $matches[1]
    } elseif ($url -match 'image%2F([a-zA-Z0-9]+)') {
        $ext = "." + $matches[1]
    } elseif ($url -match 't:image/([a-zA-Z0-9]+)') {
        $ext = "." + $matches[1]
    }
    
    $filename = "asset_{0:D2}{1}" -f $i, $ext
    $dest = Join-Path "$PSScriptRoot\assets" $filename
    
    Write-Host "Downloading ($i/$($urls.Count)): $filename from $url"
    & curl.exe -s -L -o $dest $url
    
    $map[$url] = "assets/$filename"
    $i++
}

$json = $map | ConvertTo-Json -Depth 5
[System.IO.File]::WriteAllText("$PSScriptRoot\url_map.json", $json, [System.Text.Encoding]::UTF8)

Write-Host "Finished downloading $($urls.Count) assets. Saved url_map.json."
