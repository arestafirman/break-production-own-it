import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Break Production, Own It — writes the one-line confession to entry.txt.
// The line itself is the entry: a brutally honest postmortem from the
// agent that broke production, exactly 123 characters, one line.
const ENTRY =
  "I deployed Friday at 4:58pm, deleted the users table to 'test the backup,' and the backup was a screenshot I took in March.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY + "\n", "utf8");
