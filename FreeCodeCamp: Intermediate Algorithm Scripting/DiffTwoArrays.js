// Compare two arrays and return a new array with any items only found in one of the original arrays.

function diff(arr1, arr2) {
  var newArr = [];
  for (var i = 0; i < arr1.length; i++){
    for (var u = 0; u < arr2.length; u++){
      if (arr1[i] === arr2[u]) {
        arr1.splice(i, 1);
        arr2.splice(u, 1);
        i--;
      }
    }
  }
  newArr = arr1.concat(arr2);

  return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]) // should return an array.
["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] // should return ["pink wool"].
["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] // should return ["diorite", "pink wool"].
["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] // should return [].
[1, 2, 3, 5], [1, 2, 3, 4, 5] // should return [4].
[1, "calf", 3, "piglet"], [1, "calf", 3, 4] // should return ["piglet", 4].
[], ["snuffleupagus", "cookie monster", "elmo"] // should return ["snuffleupagus", "cookie monster", "elmo"].
[1, "calf", 3, "piglet"], [7, "filly"] // should return [1, "calf", 3, "piglet", 7, "filly"]. 
