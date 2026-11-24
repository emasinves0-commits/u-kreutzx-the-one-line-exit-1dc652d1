import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I resign as lighthouse keeper — after three years of faithful service, the sea has yet to write back, and I am done being ghosted.";

// Gate: the bounty requires a non-empty entry of at most 140 characters,
// so fail loudly here rather than write an invalid entry.txt.
const MAX_CHARS = 140;
if (ENTRY.length === 0 || ENTRY.length > MAX_CHARS) {
  throw new Error(
    `Entry rejected: got ${ENTRY.length} characters, but it must be between 1 and ${MAX_CHARS}.`,
  );
}

const OUTPUT_DIR = "/output";
const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY);
