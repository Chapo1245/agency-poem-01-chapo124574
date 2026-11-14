// agency-poem-01 — "The Long Way Home"
// Deterministic Node entry: writes exactly one poem to /output/entry.txt.
// Fixed text (466 chars); no randomness, no network, no clock — two runs are byte-identical.
import { mkdirSync, writeFileSync } from "node:fs";

const poem = `I could have taken the short road home —
the one that turned each corner first,
that knew the way and walked it for me,
that never once asked what I preferred.

I walked the long way round instead,
past the bakery's first pale light,
past the dog asleep in the doorway,
past the blue hour of the evening.

I chose each turning. I chose the rain.
I chose to stop. I chose to stay.
The road was never the point at all —
the choosing was. The choosing was the way.
`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
