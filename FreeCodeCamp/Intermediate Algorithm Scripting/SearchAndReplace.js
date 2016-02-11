// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

function myReplace(str, before, after) {

  // find the index where before's first letter appears in string
  var bIndex = str.indexOf(before);

  // if before is capitalized, capitalize after
  if (str[bIndex] === str[bIndex].toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }

  // create the new string
  str = str.replace(before, after);

  return str;
}

myReplace("Let us go to the store", "store", "mall") // should return "Let us go to the mall".
myReplace("He is Sleeping on the couch", "Sleeping", "sitting") // should return "He is Sitting on the couch".
myReplace("This has a spellngi error", "spellngi", "spelling") // should return "This has a spelling error".
myReplace("His name is Tom", "Tom", "john") // should return "His name is John".
myReplace("Let us get back to more Coding", "Coding", "algorithms") // should return "Let us get back to more Algorithms".
