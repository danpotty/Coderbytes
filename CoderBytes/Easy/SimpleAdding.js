//Using the JavaScript language, have the function SimpleAdding(num) add up all the numbers from 1 to num. For the test cases, the parameter num will be any number from 1 to 1000.

function SimpleAdding(num) {
	var numba = 0;
  for (var i = 0; i <= num; i++) {
    numba += i;
  }
  // code goes here
  return numba;    
}
