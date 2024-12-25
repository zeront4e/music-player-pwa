#!/bin/bash

echo '{' > music.json
echo '  "files": [' >> music.json

first=true

for file in ./music/*; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        if [ "$first" = true ]; then
            echo "    \"$filename\"" >> music.json
            first=false
        else
            echo "    ,\"$filename\"" >> music.json
        fi
    fi
done

echo '  ]' >> music.json
echo '}' >> music.json

echo "music.json has been created with the list of files from the 'music' directory."