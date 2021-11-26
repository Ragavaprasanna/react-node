const os = require("os");

console.log("os version",os.version());
console.log("free memory",os.freemem());
console.log("total memory",os.totalmem());
console.log("cpu",os.cpus());