var inputs = process.argv.slice(2);
var answer = Math.min(...inputs);

console.log(`The minimum of [${inputs}] is ${answer}`);
