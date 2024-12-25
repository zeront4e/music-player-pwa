$files = Get-ChildItem -Path ".\music" -File | Select-Object -ExpandProperty Name

$musicData = @{
    files = $files
}

$jsonContent = $musicData | ConvertTo-Json

$jsonContent | Set-Content -Path ".\music.json"

Write-Host "music.json has been created with the list of files from the 'music' directory."