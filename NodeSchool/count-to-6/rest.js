module.exports = function average(...args) {
  var sum = args.reduce((a, b) => a + b)
  return sum / args.length;
};
