import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const html = readFileSync(join(repoRoot, "index.html"), "utf8");

const assetReferences = [
  ...html.matchAll(/<script\b[^>]*\bsrc="([^"]+)"/gi),
  ...html.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/gi),
]
  .map((match) => match[1])
  .filter((src) => !/^https?:\/\//i.test(src));

assert.ok(assetReferences.length > 0, "Expected local asset references in index.html");

for (const assetPath of assetReferences) {
  assert.ok(
    existsSync(join(repoRoot, assetPath)),
    `Missing local asset referenced by index.html: ${assetPath}`,
  );
}
