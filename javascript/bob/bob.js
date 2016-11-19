//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};


//  a great solution  http://exercism.io/submissions/d3e2be7ca1db4bc38806cbe492bb7674
Bob.prototype.hey = function(input) {
  if (input.match(/[a-zA-Z]+/) != null & input == input.toUpperCase()){
    return "Whoa, chill out!";
  }
  else if (input.match(/\?$/) !== null) {
    return "Sure.";
  }  
  else if(input.match(/^\s*$/) !== null){
    return 'Fine. Be that way!';
  }
  return "Whatever.";
};


// My failure
// Bob.prototype.hey = function(input) {
//   let punct = input.slice(-1);
//   let lastLetter = input.slice(-2);
//   var lastLetterIsCapital = /^[A-Z]/.test(lastLetter);

//   if (!lastLetterIsCapital && punct === '!') {
//     punct = "."
//   } 

//   const output = {
//     '.'            : "Whatever.",
//     undefined      : "Whatever.",
//     '!'            : "Whoa, chill out!",
//     '?'            : "Sure."
//   }
//     console.log(output[punct])
//     return output[punct]
 

//   // console.log(results)
// };

module.exports = Bob;
