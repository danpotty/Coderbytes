// Check if a string (first argument) ends with the given target string (second argument).

function end(str, target) {
  var targetLength = target.length;
  var test = [];
  str = str.split('');

  for (var i = (str.length - 1); i > ((str.length - 1) - targetLength); i--){
    test.unshift(str[i]);
  }

  test = test.join('');
  if (test === target){
    return true;
  } else {
    return false;
  }

}

end("Bastian", "n") // should return true.
end("Connor", "n") // should return false.
end("Walking on water and developing software from a specification are easy if both are frozen", "specification") // should return false.
end("He has to give me a new name", "name") // should return true.
end("He has to give me a new name", "me") // should return true.
end("He has to give me a new name", "na") // should return false.
end("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") // should return false. 
