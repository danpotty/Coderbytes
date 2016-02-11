// Convert the given number into a roman numeral.

function convert(num) {

  // make conversion tables
  var singles = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
      dubs = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
      trips = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
      quads = ['M', 'MM', 'MMM'];

  // convert number into an array of strings, one for each character
  num = num.toString().split('').reverse();

  // convert each character to its corresponding Roman numeral
  num[0] = singles[num[0] - 1];
  if (num[1]) num[1] = dubs[num[1] - 1];
  if (num[2]) num[2] = trips[num[2] - 1];
  if (num[3]) num[3] = quads[num[3] - 1];

  // convert num back to a string
  num = num.reverse().join('');

  return num;
}

convert(2) // should return "II".
convert(3) // should return "III".
convert(4) // should return "IV".
convert(5) // should return "V".
convert(9) // should return "IX".
convert(12) // should return "XII".
convert(16) // should return "XVI".
convert(29) // should return "XXIX".
convert(44) // should return "XLIV".
convert(45) // should return "XLV"
convert(68) // should return "LXVIII"
convert(83) // should return "LXXXIII"
convert(97) // should return "XCVII"
convert(99) // should return "XCIX"
convert(500) // should return "D"
convert(501) // should return "DI"
convert(649) // should return "DCXLIX"
convert(798) // should return "DCCXCVIII"
convert(891) // should return "DCCCXCI"
convert(1000) // should return "M"
convert(1004) // should return "MIV"
convert(1006) // should return "MVI"
convert(1023) // should return "MXXIII"
convert(2014) // should return "MMXIV"
convert(3999) // should return "MMMCMXCIX"
