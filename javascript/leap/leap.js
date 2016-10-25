// leap.js
var testMonkey = function(input) {
  this.year = input;
};

testMonkey.prototype.isLeap = function(input) {
  //
  let output = ((this.year % 4 === 0) ? (this.year % 100 === 0) ? (this.year % 400 === 0 ? true : false) : true : false);
  
  return output;
  //
};

module.exports = testMonkey;