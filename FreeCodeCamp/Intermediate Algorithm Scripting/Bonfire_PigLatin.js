// Translate the provided string to pig latin.
//
// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
//
// If a word begins with a vowel you just add "way" to the end.

function translate(str) {

  str = str.toLowerCase().split('');

  if(str[0] === "a" || str[0] === "e" || str[0] === "i" || str[0] === "o" || str[0] === "u"){
    str.push("way");
  } else {
    while(str[0] !== "a" && str[0] !== "e" && str[0] !== "i" && str[0] !== "o" && str[0] !== "u"){
      var holder = str[0];
      str.push(holder);
      str.splice(0, 1);
    }
    str.push("ay");
  }

  str = str.join('');

 return str;
}
