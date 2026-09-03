// Renders resume/resume.html to public/resume.pdf using headless Chrome.
//
//   npm run resume:pdf
//
// Chrome is used rather than a PDF library so the printed output matches what
// the HTML looks like in a browser, and the resume stays editable as text.

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, rmSync } from "node:fs";
import { resolve, join } from "node:path";
import { tmpdir } from "node:os";

const CANDIDATES = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
];

const browser = CANDIDATES.find((path) => existsSync(path));

if (!browser) {
  console.error(
    "No Chrome or Edge found. Checked:\n" + CANDIDATES.map((c) => "  " + c).join("\n")
  );
  process.exit(1);
}

const source = resolve("resume/resume.html");
const output = resolve("public/resume.pdf");

if (!existsSync(source)) {
  console.error(`Missing ${source}`);
  process.exit(1);
}

// Chrome refuses to reuse a running profile, so give it a throwaway one.
const profile = join(tmpdir(), `resume-print-${Date.now()}`);
mkdirSync(profile, { recursive: true });

try {
  execFileSync(
    browser,
    [
      "--headless",
      "--disable-gpu",
      "--no-sandbox",
      `--user-data-dir=${profile}`,
      "--no-pdf-header-footer",
      `--print-to-pdf=${output}`,
      `file:///${source.replace(/\\/g, "/")}`,
    ],
    { stdio: "inherit", timeout: 120000 }
  );

  console.log(`Wrote ${output}`);
} finally {
  rmSync(profile, { recursive: true, force: true });
}
