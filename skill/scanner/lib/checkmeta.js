// checkmeta.js — parse the canonical checklist markdown into per-ID metadata, so every
// verdict can carry what the check verifies, why it matters (rationale + legal basis),
// its binding and risk. The checklist is the source of truth; the scanner never restates
// it, it reads it. Tables are `| ID | Check | Rationale and legal basis | Binding | Risk | Auto | Automated test |`.

import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CHECKLIST_DIR = join(__dirname, '..', '..', '..', 'checklist');

const ID_RE = /^[A-Z]-\d+(\.\d+)?$/;

function parseFile(path) {
  const out = {};
  let text;
  try { text = readFileSync(path, 'utf8'); } catch { return out; }
  for (const line of text.split('\n')) {
    if (!line.startsWith('|')) continue;
    const cells = line.split('|').map((c) => c.trim());
    // cells[0] and last are empty from the leading/trailing pipe
    const id = cells[1];
    if (!id || !ID_RE.test(id)) continue;
    out[id] = {
      check: cells[2] || '',
      rationale: cells[3] || '',
      binding: (cells[4] || '').toUpperCase(),
      risk: (cells[5] || '').toUpperCase(),
      auto: cells[6] || '',
      test: cells[7] || '',
    };
  }
  return out;
}

let CACHE = null;

// Load metadata for every check ID found in the English checklist files.
export function loadCheckMeta() {
  if (CACHE) return CACHE;
  const meta = {};
  let files = [];
  try {
    files = readdirSync(CHECKLIST_DIR)
      .filter((f) => f.endsWith('.md') && !f.endsWith('.it.md') && f !== 'README.md');
  } catch { /* checklist dir not reachable — return empty, scanner still runs */ }
  for (const f of files) Object.assign(meta, parseFile(join(CHECKLIST_DIR, f)));
  CACHE = meta;
  return meta;
}

export function metaFor(id) {
  return loadCheckMeta()[id] || null;
}
