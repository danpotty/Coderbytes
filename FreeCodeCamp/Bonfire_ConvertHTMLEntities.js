// Convert the characters "&", "<", ">", '"' (double quote), and "'" (apostrophe), in a string to their corresponding HTML entities.

function convert(str) {
  str = str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;').replace(/<>/g, '&lt;&gt;');

  return str;
}

convert("Dolce & Gabbana");
convert("Hamburgers < Pizza < Tacos");
convert("Sixty > twelve");
convert('Stuff in "quotation marks"');
convert("Shindler's List");
convert("<>");
convert("abc");
