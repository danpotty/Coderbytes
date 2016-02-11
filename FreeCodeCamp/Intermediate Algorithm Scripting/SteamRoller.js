// Flatten a nested array. You must account for varying levels of nesting.

function steamroller(arr) {
  // I'm a steamroller, baby
  var ret =[];
  for(var i = 0; i < arr.length; i++) {
    if(arr[i].constructor === Array) {
      ret = ret.concat(steamroller(arr[i]));
    } else {
      ret.push(arr[i]);
    }
  }
  return ret;
}

steamroller([[["a"]], [["b"]]]) // should return ["a", "b"].
steamroller([1, [2], [3, [[4]]]]) // should return [1, 2, 3, 4].
steamroller([1, [], [3, [[4]]]]) // should return [1, 3, 4].
steamroller([1, {}, [3, [[4]]]]) // should return [1, {}, 3, 4]. 
