function BracketMatcher(str) {

  var bracks = str.replace(/[^()]/g, "").split('');
  var count = 0;


  console.log(bracks);

  for (var i = 0; i < bracks.length; i++){
    if (bracks[i] === '('){
      count += 1;
    } else {
      if (count === 0){
        console.log(0);
        return 0;
      }
      count -= 1;
    }
  }

  if (count === 0){
    str = 1;
  }
    else {str = 0;
  }

  console.log(str);
  return str;


}
BracketMatcher(readline());
