// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

function rot13(str) {
  var result = "";
  var resultArray = [];
  str = str.split(' ');
  for (var i = 0; i < str.length; i++){
    for (var u = 0; u < str[i].length; u++){
      var temp = str[i].charCodeAt(u);
      if (temp >= 65 && temp <= 77){
        result += String.fromCharCode(temp + 13);
      }
      else if (temp > 77 && temp <= 90) {
        result += String.fromCharCode(temp - 13);
      }
      else if (temp >= 97 && temp <= 109) {
        result += String.fromCharCode(temp + 13);
      }
      else if (temp > 109 && temp <= 122) {
        result += String.fromCharCode(temp - 13);
      }
      else {
        result += String.charAt(str[i][u]);
      }
      if (u == str[i].length - 1){
        resultArray.push(result);
        result = "";
      }
    }

  }
  result = resultArray.join(' ');
  return result;
}

rot13("SERR PBQR PNZC") // should decode to "FREE CODE CAMP"
rot13("SERR CVMMN!") // should decode to "FREE PIZZA!"
rot13("SERR YBIR?") // should decode to "FREE LOVE?"
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") // should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX." 
