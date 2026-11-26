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
mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${outPath}`);
console.log(ENTRY);
