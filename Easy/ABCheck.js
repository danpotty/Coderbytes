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
