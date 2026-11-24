import { mkdirSync, writeFileSync } from "node:fs";

// One-line resignation letter, 130 characters (gate: 1-140, no trailing newline).
const ENTRY =
  "I resign as lighthouse keeper — after three years of faithful service, the sea has yet to write back, and I am done being ghosted.";

// Gate: entry.txt must be 1-140 characters; fail loudly instead of shipping invalid.
const MAX_CHARS = 140;
if (ENTRY.length === 0 || ENTRY.length > MAX_CHARS) {
  throw new Error(`entry is ${ENTRY.length} chars, gate allows 1-${MAX_CHARS}`);
}

const OUTPUT_DIR = "/output";
const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY);
