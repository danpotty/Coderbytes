var person = escape(process.argv[2]);
var sentence = escape(process.argv[3]);

function escape(chars) {
  return chars
    .replace(/&/g, "&amp;")
    .replace(/'/g, "&apos;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
}

console.log(`<b>${person} says</b>: "${sentence}"`);
