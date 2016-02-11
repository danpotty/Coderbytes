// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

function mutation(arr) {
  var first = arr[0].toLowerCase().split('');
  var second = arr[1].toLowerCase().split('');

  for (var i = 0; i < second.length; i++){
    for (var u = 0; u < first.length; u++){
      if (second[i] === first[u]){
        second[i] = true;
      }
    }
  }

  for (var s = 0; s < second.length; s++){
    if (second[s] !== true){
      arr = false;
    }
    else if (s == (second.length - 1) && arr !== false){
      arr = true;
    }
  }

  return arr;
}

mutation(["hello", "hey"]) // should return false.
mutation(["hello", "Hello"]) // should return true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) // should return true.
mutation(["Mary", "Army"]) // should return true.
mutation(["Mary", "Aarmy"]) // should return true.
mutation(["Alien", "line"]) // should return true.
mutation(["floor", "for"]) // should return true.
mutation(["hello", "neo"]) // should return false. 
