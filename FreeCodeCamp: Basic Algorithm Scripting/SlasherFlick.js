// Return the remaining elements of an array after chopping off n elements from the head.

function slasher(arr, howMany) {

  if (howMany >= arr.length){
    arr = [];
  }
  else {
    arr.splice(0, howMany);
  }

  return arr;
}

slasher([1, 2, 3], 2) // should return [3].
slasher([1, 2, 3], 0) // should return [1, 2, 3].
slasher([1, 2, 3], 9) // should return [].
slasher([1, 2, 3], 4) // should return []. 
