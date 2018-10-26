const fs = require("fs")
try {
    fs.accessSync("./name");
} catch(e) {
    console.log(fs.constants)
}
