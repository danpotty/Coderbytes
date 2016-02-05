// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {

  str = str.replace(/_/g, ' ');
  str = str.replace(/[A-Z]/g,function(f) { return " " + f.toLowerCase();});
  str = str.replace(/\s\s/g, ' ');
  str = str.trim();
  str = str.split(' ').join('-');

  return str;

}

spinalCase("This Is Spinal Tap") // should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") // should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") // should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") // should return "teletubbies-say-eh-oh". 
