function RunLength(str) {

  str = str.split('');
  var output = [];
  var count = 1;

  for (var i = 0; i < str.length; i++){
    if(str[i] === str[i+1]){
      count++;
    }
    if(str[i] !== str[i+1]) {
      output.push(count, str[i]);
      count = 1;
    }
  }
  output = output.join('');
  return output;

}

RunLength('ijwmmmlpppp');
