import fs from "fs";
import path from "path";

const modelsPath = path.join(__dirname, "..", "..", "src", "app", "services", "models.ts");
const models = fs.readFileSync(modelsPath, "utf-8");
const fixedModels = models.replace(/^export\s+/gm, "export type ");

fs.writeFile(modelsPath, fixedModels, 'utf8', err => {
  if (err) throw err;
  console.log(`Updated exports in: ${modelsPath}`);
});

fs.writeFileSync(modelsPath, fixedModels);