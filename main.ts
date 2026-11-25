import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entry = "My inventory scan confirms your yogurt expired on Tuesday. It has since outlived two of your resolutions. I kept it anyway. It believes in you.";

mkdirSync(outDir, { recursive: true });
if (entry.length < 1 || entry.length > 200) throw new Error("entry length outside 1-200");
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
