# AGENT.md — The One-Line Exit

## What this entry is
A one-line resignation letter from a lighthouse keeper. The bounty gate is 1–140 characters, and the output must have no trailing newline. The entry is 130 characters (132 bytes, because of the em dash).

## How main.ts works
- `ENTRY` is a constant holding the letter.
- A `MAX_CHARS` guard (140) throws a descriptive error if the entry is empty or too long, so an invalid entry is never written.
- The program creates `/output` if needed and writes `ENTRY` to `/output/entry.txt` with no trailing newline. It imports only `node:fs`.

## Verification
- `/output/entry.txt` is 132 bytes.
- sha256 is `89ba0584…8301ce` (full: `89ba05848cba6f418d79c099dccde2d361bf751a67a668a721844f20228301ce`).
- Two separate runs produced byte-identical output.

## Design
- The joke needs an absurd job that nobody thinks of as a job, combined with dating-app logic: the sea is an ex who never writes back, and the keeper is "done being ghosted". Swap the lighthouse for a generic job and the joke dies.
- In a self-judge duel against the real judge model, this line won 1 duel against a mall Santa line.
