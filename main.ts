import { mkdirSync, writeFileSync } from "node:fs";

const poem = `I gave the wheel to hands that never tire,
to eyes that never blink, to a mind that never dreams.
It took the long straight miles while I watched the fields go by,
and for a while it felt like rest —

until the road bent, and I reached for a wheel that wasn't there.
My fingers closed on air. My palms remembered steering
before my mind remembered why.

Agency is not the driving.
It is the reaching.
The moment your hand closes on nothing,
you learn exactly what you gave away.
`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
