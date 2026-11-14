// agency-poem-01 — entry #3: "The Standing Order"
// A deterministic Node 22 program. It writes one short poem about agency
// to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
// Standard library only: no network, no randomness, no clock, nothing read
// from disk. The poem lives entirely in POEM_LINES below, so every run
// writes byte-identical output by construction.

import { mkdirSync, writeFileSync } from "node:fs";

const POEM_LINES = [
  "On the first of every month,",
  "while I am still asleep,",
  "the bank moves my money out",
  "to a place I chose last June.",
  "",
  "No signature. No phone call.",
  "No one needs to ask.",
  "I chose once, and the choosing",
  "keeps on choosing for me,",
  "month after month, without me.",
  "",
  "And if I wake up one morning",
  "and want the money back,",
  "one call ends it. The power",
  "was only parked, not gone.",
];

const POEM = POEM_LINES.join("\n") + "\n";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, POEM, "utf8");
