# Star Wars Trivia

A command line trivia game with content from all types of Star Wars cannon media.

## How to Install the Game

1. Go to the [latest release page](https://github.com/dev-nicolaos/sw-trivia/releases/latest)
   and download the executable that corresponds to your platform
2. Save the executable to a folder somewhere in your file system
3. If that folder is not already in your [system or user path](https://en.wikipedia.org/wiki/PATH_(variable)),
   you'll need to add it (see instructions below if you need help doing this)
   - [How to Add to Windows PATH Environment Variable](https://helpdeskgeek.com/windows-10/add-windows-path-environment-variable/)
   - [Adding a Directory to PATH in MacOS](https://osxdaily.com/2014/08/14/add-new-path-to-path-command-line/)
   - [How to Add a Directory to Your $PATH in Linux](https://www.howtogeek.com/658904/how-to-add-a-directory-to-your-path-in-linux/)

## How to Start the Game

1. Open a terminal or command prompt
2. Type `sw-trivia` to start the game
   - add the `--version` flag (`-v` for short) to see version information about the game
   - add the `--stats` flag (`-s` for short) to see statistics about the game's trivia content
3. Type the number of the option you'd like to select and press `Enter` to proceed

## Development

This project is built with [Deno](https://deno.land)

Although this project uses a stable version of Deno, it needs the `--unstable` flag for a few APIs and makes use of the [Deno Standard Modules](https://deno.land/std) which are pre 1.0.
Because of this, it is still recommended to use the specific version of Deno listed in `src/version.ts`.
The program will warn the user if the version of Deno being run does not match the version listed there.

### Scripts

By default these scripts will prompt for various permissions, such as reading/writing to the filesystem or spawning a subprocess.
To bypass these prompts, add Deno's `-A` flag to the command.
For more info on how script permissions work in Deno, check out the
[permissions page in the manual](https://deno.land/manual@main/getting_started/permissions).

#### Run Program

`deno run --unstable scripts/start.ts`

##### Optional Arguments

- `-v`, `--version`: Show app version info
- `-s`, `--stats`: Show statistics about trivia content

#### Scaffold New Trivia Source File

`deno run --unstable scripts/new.ts`

##### Required Arguments

- `-n`, `--name`: The name of the new trivia source
- `-t`, `--type`: The media type of the new trivia source
  - valid types: book, comic, film, game, television

#### Build Executable

`deno run --unstable scripts/build.ts`

By default the executable will be output to `target/debug`.
If the release argument is passed, the executables will be output to `target/release/[platform-name]`.

##### Optional Arguments

- `-r`, `--release`: Build production executables for all platforms
