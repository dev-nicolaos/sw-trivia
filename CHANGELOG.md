# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## Unreleased

### Added

- New trivia from
  - _The Clone Wars_
  - _Solo: A Star Wars Story_
  - _The Empire Strikes Back_
  - _From A Certain Point of View: The Empire Strikes Back_
  - _Return of the Jedi_

### Changed

- Update target runtime (Deno) to v1.5.3 and dependencies (Deno Standard) to v0.78.0
- Migrate from prettier to `deno fmt` for code formatting

## 0.11.0 - 2020-09-12

### Added

- New trivia questions from _Bloodline_ and _The Clone Wars_
- `.gitignore` file
  - ignore `.vscode` local editor settings

### Changed

- Update target runtime (Deno) to v1.3.3 and dependencies (Deno Standard) to v0.68.0

### Fixed

- Corrected `README.md`, scripts will run from any directory
- New trivia script waits for a user response when the version check fails instead of continuing on

## 0.10.0 - 2020-07-04

### Added

- Lots of new trivia. Sources include:
  - _Catalyst_
  - _Dark Disciple_
  - _From a Certain Point of View_
  - _Master and Apprentice_
  - _Queen's Peril_
  - _Solo_
  - _The Aftermath trilogy_
  - _The Clone Wars_
  - _Thrawn Alliances_
  - _Thrawn Treason_
  - _Twilight Company_
- New empty trivia files for upcoming media:
  - _Squadrons_
  - _Shadow Fall_
  - _From a Certain Point of View: The Empire Strikes Back_

### Changed

- Update target runtime (Deno) to v1.1.3 and dependencies (Deno Standard) to v0.60.0
- Updated `README.md`'s blurb about runtime version

### Fixed

- Fixed a few more typos in trivia questions

## 0.9.0 - 2020-05-02

### Added

- New trivia files for TV shows can now be scaffolded with the new source script
- There are now batch (for Windows) and shell (for Mac/Linux) scripts for launching the game and creating new trivia files
- More _Jedi: Fallen Order_ trivia
- Added empty trivia file for _Canto Bight_ book

### Changed

- Accidentally hitting enter without typing anything is no longer counted as a wrong answer, just leaves you in place
- The new source script now requires FS read access so it can verify a trivia file does not already exist
- The new source script only requests read/write access to the specific trivia folder in question
- TV series' trivia files are no longer split out by season
- Some small refactors of internal code

### Fixed

- Continued fixing typos and capitalization mistakes

## 0.8.0 - 2020-04-11

### Added

- New trivia files for comics can now be scaffolded with the new source script
- Added empty trivia file for _Han Solo - Imperial Cadet_

### Changed

- Running the new source script no longer requires the `--allow-write` flag. The script will request write permission if it is omitted.
- A couple trivia questions have been reworded to be "in universe"
- Update target runtime (Deno) and dependencies (Deno Standard) to v0.40.0
- Some small refactors of internal code

### Fixed

- Corrected a typo in the log message displayed when the program is run with the wrong version of Deno
- The import of _Jedi of the Republic—Mace Windu_ is now pointing to the correct file
- Several trivia questions have been edited for capitalization and spelling

## 0.7.0 - 2020-04-08

### Added

- New trivia questions from...
  - Galaxy's Edge: Black Spire
  - Resistance Reborn
  - Jedi: Fallen Order
- Added empty trivia files for...
  - Clone Wars Season 7
  - Vader Immortal
  - A Crash of Fate
- To improve readability, an extra line break has been added after a question's source is printed
- Added VS Code snippet "New Question" to reduce amount of typing when adding trivia

### Changed

- Update target runtime (Deno) and dependencies (Deno Standard) to v0.39.0
- Get user input now uses Deno Standard's built in function

## 0.6.0 - 2020-03-20

### Changed

- The console only clears when the game is actually run, not when displaying version info, stats, or a runtime version warning
- Improved detection of numeric answer sets when choosing whether to shuffle or sort answers
- Update target runtime (Deno) and dependencies (Deno Standard) to v0.36.0

## 0.5.0 - 2020-01-29

### Added

- After finishing a quiz, the user has the option of taking another

### Changed

- Improved how answers are sorted
  - Numeric answers are now sorted lowest to highest
  - For non-numeric answers, all answers are sorted randomly instead of just the correct answer
- Update target runtime (Deno) and dependencies (Deno Standard) to v0.30.0

### Fixed

- A couple typos in the trivia content

## 0.4.0 - 2020-01-25

### Added

- Checks version of runtime (Deno) at launch for compatibility

## 0.3.0 - 2020-01-21

### Added

- Clear console at certain points in game

### Changed

- Update target runtime (Deno) and dependencies (Deno Standard) to v0.28.0
