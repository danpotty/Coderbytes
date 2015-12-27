// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array.

function chunk(arr, size) {
  var temp = [];
  var ans = [];

  for (var i = 0; i < arr.length; i++){
    temp.push(arr[i]);
    if (temp.length == size || i == (arr.length - 1)){
      ans.push(temp);
      temp = [];
    }
  }

  return ans;
}

chunk(["a", "b", "c", "d"], 2) // should return [["a", "b"], ["c", "d"]].
chunk([0, 1, 2, 3, 4, 5], 3) // should return [[0, 1, 2], [3, 4, 5]].
chunk([0, 1, 2, 3, 4, 5], 2) // should return [[0, 1], [2, 3], [4, 5]].
chunk([0, 1, 2, 3, 4, 5], 4) // should return [[0, 1, 2, 3], [4, 5]]. 
