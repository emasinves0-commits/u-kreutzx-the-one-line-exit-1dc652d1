import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I resign as lighthouse keeper — after three years of faithful service, the sea has yet to write back, and I am done being ghosted.";

// Gate: the bounty requires a non-empty entry of at most 140 characters,
// so fail loudly here rather than write an invalid entry.txt.
const MAX_CHARS = 140;
function validateEntry(text: string): void {
  if (text.length === 0 || text.length > MAX_CHARS) {
    throw new Error(
      `Entry rejected: got ${text.length} characters, but it must be between 1 and ${MAX_CHARS}.`,
    );
  }
}
validateEntry(ENTRY);

const OUTPUT_DIR = "/output";
const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;

function main(): void {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY);
}

main();
