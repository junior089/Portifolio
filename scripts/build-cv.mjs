import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const browser = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium'
].find((candidate) => candidate && existsSync(candidate));

if (!browser) {
  console.error('Chrome or Edge not found. Set CHROME_PATH to a Chromium-based browser.');
  process.exit(1);
}

const documents = [
  ['cv/en.html', 'public/Carlos-Alberto-Oliveira-Jr-CV-EN.pdf'],
  ['cv/pt.html', 'public/Carlos-Alberto-Oliveira-Jr-CV-PT.pdf']
];

const profile = mkdtempSync(path.join(tmpdir(), 'cv-chrome-'));

try {
  for (const [source, target] of documents) {
    execFileSync(
      browser,
      [
        '--headless',
        '--disable-gpu',
        '--disable-extensions',
        `--user-data-dir=${profile}`,
        '--no-pdf-header-footer',
        '--virtual-time-budget=10000',
        `--print-to-pdf=${path.join(root, target)}`,
        pathToFileURL(path.join(root, source)).href
      ],
      { stdio: 'ignore' }
    );
    console.log(target);
  }
} finally {
  rmSync(profile, { recursive: true, force: true });
}
