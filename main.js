const faker = require('faker');
const YAML = require('yaml');
const fs = require('fs');
const path = require('path');

const configYAMLFile = process.argv[3] || 'default.yaml'
const isApply = process.argv[2] === 'apply'

const file = fs.readFileSync(configYAMLFile, 'utf8');
const config = YAML.parse(file);
const count = parseInt(config.count) || 1;
faker.locale = "zh_CN";

let fields = (Object.keys(config.entries));

let result = {data: []}
for(let i=0; i< count; i++) {
  result.data.push(genEntry());
}

let jsonStr = JSON.stringify(result, true, 2);

console.log(jsonStr);

if(isApply) {
  let extName = path.extname(configYAMLFile);
  let baseName = path.basename(configYAMLFile, extName);
  let fileName = "./data/" + baseName + ".json"
  fs.writeFileSync(fileName, jsonStr, 'utf8');
  console.log(`已经将结果写入, ${fileName}`);
}


function genEntry() {
  let result = {};
  for(let i=0; i<fields.length; i++) {
    let key = fields[i];
    let value = faker.fake(config.entries[fields[i]]);
    result[key] = value;  
  }
  return result;
}