//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  let punct = input.slice(-1);
  let lastLetter = input.slice(-2);
  var lastLetterIsCapital = /^[A-Z]/.test(lastLetter);

  if (!lastLetterIsCapital && punct === '!') {
    punct = "."
  } 

  const output = {
    '.'            : "Whatever.",
    undefined      : "Whatever.",
    '!'            : "Whoa, chill out!",
    '?'            : "Sure."
  }
    console.log(output[punct])
    return output[punct]
 

  // console.log(results)
};

module.exports = Bob;
