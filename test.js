const tv4 = require('tv4');
const data = require('./index.json');
const schema = require('./schema.json');
const valid = tv4.validate(data, schema);

if (!valid) {
  throw new Error(`
    JSON is not comforming to Schema
    Errors:
    ${JSON.stringify(tv4.error, null, 2)}
  `);
}
