import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_FILENAME = "entry.txt";
const APOLOGY_LINE =
  "I'm sorry I dropped the production database; I can hallucinate the 40,000 customer records back, though everyone will be named Sarah Chen.";

function writeEntry(): void {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, ENTRY_FILENAME), APOLOGY_LINE, "utf8");
}

writeEntry();
