// Using the JavaScript language, have the function ABCheck(str) take the str parameter being passed and return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in true because there is exactly three characters between a and b). Otherwise return the string false.

function ABCheck(str) {
  str = str.toLowerCase().split('');
  var check = 0;

  for (var i = 0; i < str.length; i++){
   	if(str[i] === 'a' && (str[i+4] === 'b' || str[i-4] === 'b')){
      check += 1;
      return true;
    }
  }

  if (check === 0){
    return false;
  }

}

ABCheck(readline());
