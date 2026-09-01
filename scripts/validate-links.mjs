import { readFileSync } from "node:fs";

const text = readFileSync(new URL("../src/config/site.ts", import.meta.url), "utf8");
const urls = [...text.matchAll(/https?:\/\/[^"'`\s]+/g)].map((match) => match[0].replace(/[),]+$/, ""));
const unique = [...new Set(urls)];
const failures = [];

for (const url of unique) {
  try {
    const response = await fetch(url, {
      method: "HEAD",
      redirect: "follow",
      signal: AbortSignal.timeout(12000),
      headers: { "user-agent": "sssahu-link-check/1.0" },
    });
    const status = response.status;
    const ok = status < 400 || status === 403 || status === 429;
    console.log(`${ok ? "OK" : "FAIL"} ${status} ${url}`);
    if (!ok) failures.push({ url, status });
  } catch (error) {
    console.log(`FAIL ERR ${url}`);
    failures.push({ url, error: String(error) });
  }
}

console.log(`Checked ${unique.length} URLs. Failures: ${failures.length}`);
if (failures.length) console.log(JSON.stringify(failures, null, 2));
