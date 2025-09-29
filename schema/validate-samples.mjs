import fs from 'node:fs';
import path from 'node:path';
import Ajv2020 from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';

const schemaPath = path.resolve('./schema/config.schema.json');
const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));

const ajv = new Ajv2020({ allErrors: true, strict: false });
addFormats(ajv);
const validate = ajv.compile(schema);

const samplesDir = path.resolve('./schema/samples');
const files = fs.readdirSync(samplesDir).filter((f) => f.endsWith('.json'));

let failures = 0;
for (const file of files) {
  const data = JSON.parse(fs.readFileSync(path.join(samplesDir, file), 'utf8'));
  const ok = validate(data);
  const expectedInvalid = file.startsWith('invalid_');
  const pass = expectedInvalid ? !ok : ok;
  if (!pass) {
    failures++;
    console.error(`FAIL: ${file}`);
    if (!ok) console.error(validate.errors);
  } else {
    console.log(`OK:   ${file}`);
  }
}

if (failures > 0) {
  process.exitCode = 1;
}


