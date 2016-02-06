// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

function pair(str) {

  str = str.split('');
  var temp = [];
  var answer = [];

  for (var i = 0; i < str.length; i++) {
    temp.push(str[i]);
    if (str[i] === "A") { temp.push("T"); }
    if (str[i] === "T") { temp.push("A"); }
    if (str[i] === "C") { temp.push("G"); }
    if (str[i] === "G") { temp.push("C"); }
    answer.push(temp);
    temp = [];
  }

  return answer;
}

pair("ATCGA") // should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pair("TTGAG") // should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pair("CTCTA") // should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
