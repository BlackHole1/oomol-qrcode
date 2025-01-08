import { writeFile } from "fs/promises";
import { join } from "path";

export default async function(params, context) {
  const image = Buffer.from(params.input, "base64");

  const p = join(context.sessionDir, "output.png");

  writeFile(p, image);
  return { output: p };
}
