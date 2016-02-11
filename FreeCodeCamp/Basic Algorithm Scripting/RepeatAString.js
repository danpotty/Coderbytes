// Repeat a given string (first argument) n times (second argument). Return an empty string if n is a negative number.

function repeat(str, num) {
  var ans = [];

  for (var i = 0; i < num; i++){
    ans.push(str);
  }

  ans = ans.join('');

  return ans;
}

repeat("*", 3) // should return "***".
repeat("abc", 3) // should return "abcabcabc".
repeat("abc", 4) // should return "abcabcabcabc".
repeat("abc", 1) // should return "abc".
repeat("*", 8) // should return "********".
repeat("abc", -2) // should return "". 
