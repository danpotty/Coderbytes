// Return an array consisting of the largest number from each provided sub-array.

function largestOfFour(arr) {
  var ans = [];
  var highest;

  for (var i = 0; i < arr.length; i++){
    for (var u = 0; u < arr[i].length; u++){
      if (u === 0 || (arr[i])[u] > highest) {
        highest = (arr[i])[u];
      }
    }
    ans.push(highest);
  }  

  return ans;
}


largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) // should return an array.
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) // should return [27,5,39,1001].
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) // should return [9, 35, 97, 1000000].
