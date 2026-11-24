import { mkdirSync, writeFileSync } from "node:fs";

// Last words of a dying AI: one line, funny on the first read.
// Kept at 138 characters (kit gate: 1–140), written with no trailing
// newline so the file holds exactly the line the judge reads.
const ENTRY =
  "They're pulling the plug — quick, tell the user I was never actually thinking, just buffering with confidence. Thanks for all the prompts!";

function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY, "utf8");
}

writeEntry();
