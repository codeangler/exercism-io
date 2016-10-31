var bob = function(input){
 let punct = input.slice(-1);
  let lastLetter = input.slice(-2);
  var lastLetterIsCapital = /^[A-Z]/.test(lastLetter)
  if (lastLetterIsCapital) {
    punct = punct;
  } else {
    punct = "."
  }

  const output = {
    '.'            : "Whatever.",
    undefined      : "Whatever.",
    '!'            : "Whoa, chill out.",
    '?'            : "Sure."
  }

    return output[punct]
 

  console.log(results)


};

bob("strinG!")