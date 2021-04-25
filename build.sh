if [ ! -d $(dirname $0)/bin ]; then
  mkdir $(dirname $0)/bin
fi

deno compile --unstable --lite --import-map=$(dirname $0)/import_map.json -o $(dirname $0)/bin/sw-trivia $(dirname $0)/src/mod.ts
