// Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.

function sumFibs(num) {
  var ans = 1;
  var fibArray = [1,1];
  for (var i = 1; fibArray[i] <= num; i++) {
    fibArray.push(fibArray[i] + fibArray[i-1]);
    if (fibArray[i] % 2 !== 0) ans += fibArray[i];
  }

  return ans;
}

sumFibs(1) // should return a number.
sumFibs(1000) // should return 1785.
sumFibs(4000000) // should return 4613732.
sumFibs(4) // should return 5.
sumFibs(75024) // should return 60696.
sumFibs(75025) // should return 135721.
