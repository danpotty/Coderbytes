// Using the JavaScript language, have the function PalindromeTwo(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. The parameter entered may have punctuation and symbols but they should not affect whether the string is in fact a palindrome. For example: "Anne, I vote more cars race Rome-to-Vienna" should return true.

function PalindromeTwo(str) {

  str = str.replace(/[^a-z]/gi, '').toLowerCase();
  var revStr = '';

  for(var i = str.length - 1; i >= 0; i--){
    revStr += str[i];
  }
  if(str === revStr){
    return true;
  } else {
    return false;
  }

}

PalindromeTwo('Race356&^@#$^*car');
