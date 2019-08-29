# Star Wars Trivia
A command line trivia game with content from all types of Star Wars cannon media.

## Development
This project is built with [Deno](https://deno.land)

Because Deno is still pre 1.0 and in rapid development, this project is built against a specific version of Deno and its standard library. This version number is listed in `src/version.ts`.

### Scripts

#### Run Program
`deno src/mod.ts`

#### Format Code with Prettier
`deno fmt src scripts -- --single-quote --trailing-comma all`

#### Scaffold New Trivia File (doesn't support tv or comics yet)
`deno scripts/new_source.ts --allow-write --importmap=import_map.json`