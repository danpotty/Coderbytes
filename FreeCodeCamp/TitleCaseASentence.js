// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

function titleCase(str) {
  str = str.toLowerCase().split(' ');
  var ans = [];
  for (var i = 0; i < str.length; i++){
    var word = str[i].split('');
    word[0] = word[0].toUpperCase();
    word = word.join('');
    ans.push(word);
  }
  str = ans.join(' ');
  return str;
}

titleCase("I'm a little tea pot") // should return a string.
titleCase("I'm a little tea pot") // should return "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt") // should return "Short And Stout".
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") // should return "Here Is My Handle Here Is My Spout". 
