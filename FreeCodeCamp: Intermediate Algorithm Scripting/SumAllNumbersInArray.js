// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

function sumAll(arr) {
  var large = Math.max(arr[0], arr[1]);
  var small = Math.min(arr[0], arr[1]);
  var ans = 0;
  for (var i = small; i <= large; i++){
    ans += i;
  }
  return ans;
}

sumAll([1, 4]);

sumAll([1, 4]) // should return a number.
sumAll([1, 4]) // should return 10.
sumAll([4, 1]) // should return 10.
sumAll([5, 10]) // should return 45.
sumAll([10, 5]) // should return 45. 
