// Require fs package for use in code
var fs = require('fs');

// Run the fs method on the target argument to read the proper file, then save it to a variable
var contents = fs.readFileSync(process.argv[2]);

// Find the number of lines by converting the contents into a string, then splitting the string into an array separating by new lines, and finally finding the length of this array.
// Subtract 1 from the length of the array because there won't be a new line character after the final line of the file.
var lines = contents.toString().split('\n').length - 1;

console.log(lines);
