function NumberAddition(str) {
  str = str.match(/[0-9]*/g);
  console.log(str);

    var ans = 0;
  	for (var i = 0; i < str.length; i++){
       if(str[i] !== ""){
         ans += parseInt(str[i]);
      console.log(ans);
       }

    }
  console.log(ans);
  return ans;

}

NumberAddition('kjef93kjb204niu29');
