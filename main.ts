// Your AI Therapist's Diagnosis — make.fun text entry.
// Writes one single-line diagnosis (<=200 chars) to /output/entry.txt.
// No network, no dependencies, runs on Node 22.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY =
  "Diagnosis: acute main-character syndrome. You narrate your life like a documentary, but the camera crew quit in episode two and nobody told you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outPath = join(outDir, "entry.txt");

// Gate from the brief: a single line of 1-200 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`Entry is ${ENTRY.length} characters; must be 1-200.`);
}
if (ENTRY.includes("\n") || ENTRY.trim().length === 0) {
  throw new Error("Entry must be a single non-blank line.");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${outPath}`);
console.log(ENTRY);
