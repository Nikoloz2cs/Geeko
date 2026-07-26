#!/bin/bash
set -e

BASE_DIR="public/images/products"
DRY_RUN=true   # set to false if preview seems right and you want changes applied

cd "$BASE_DIR"

for dir in */; do
    dir="${dir%/}"
    echo "Checking $dir..."
    (
        cd "$dir"
        files=$(ls | grep -E '^[0-9]+\.jpg$' | sort -n -t. -k1,1)
        counter=1
        for f in $files; do
        num="${f%.jpg}"
        if [ "$num" == "1" ]; then
            continue
        fi
        if [ "$DRY_RUN" = true ]; then
            echo "  would rename: $f -> alt-$counter.jpg"
        else
            mv -n "$f" "alt-$counter.jpg"
            echo "  renamed: $f -> alt-$counter.jpg"
        fi
        counter=$((counter+1))
        done
    )
done