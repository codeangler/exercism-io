'use strict';

const SomeConstructorObject = function () {
  this.compute = function(x, y){
    const xSplit = x.split('');
    const ySplit = y.split('');
    let output = 0;
    if  ( x.length !== y.length ) {
      throw new Error('DNA strands must be of equal length.')
    }
    for(let i = 0; i < x.length; i++){
      if( xSplit[i] !== ySplit[i]){
        output++;
      }
    }


    return output;
   }
}





module.exports = SomeConstructorObject;

