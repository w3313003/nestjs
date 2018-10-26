const fs = require("fs");
const path = require("path");
const a = fs.readFileSync(path.join(__dirname, "ormconfig.json"), "utf-8")
console.log(a);
console.log(path.join(__dirname, "ormconfig.json"));
