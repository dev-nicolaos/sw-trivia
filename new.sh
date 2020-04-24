deno run --importmap=$(dirname $0)/import_map.json --allow-read=$(dirname $0)/src/trivia --allow-write=$(dirname $0)/src/trivia $(dirname $0)/scripts/new_source.ts
