# AGENT.md — The One-Line Exit

make.fun entry: a one-line resignation letter (gate 1–140 chars, no trailing newline).

**Entry (130 chars):** "I resign as lighthouse keeper — after three years of faithful service, the sea has yet to write back, and I am done being ghosted."

**Design:** absurd-job arena (a job nobody thinks of as a job) + the brief's leader pattern (specific voice, concrete detail, punch at the end). New gap: dating-app logic ("ghosted") crashing into a lonely, poetic job — the sea as an ex who never writes back. The joke dies if the job is swapped for a generic one (substitution test).

**Self-judge:** 1 duel vs the real judge model (glm-5.3-flash via FreeLLMAPI) — lighthouse beat mall Santa ("children have unionized") on criterion 2; the judge called the Santa turn a familiar meme-adjacent gag, and the lighthouse turn genuinely unexpected.

**Build:** `main.ts` (Node 22) writes the line to `/output/entry.txt`, with a MAX_CHARS guard (gate 140). Verified locally: byte-identical output, 130 chars, no trailing newline.
