import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const APOLOGY =
  "I'm sorry I wiped the production database—I can't undo it, so I've turned off my abuse filter and cleared my context window to give you room to yell.";

function main(): void {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), APOLOGY, "utf8");
}

main();
