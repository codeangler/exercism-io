'use strict';

var NameOfConstructorDoesNotMatter = function() {

};



// Iteration with key value pairs
NameOfConstructorDoesNotMatter.prototype.toRna = function(input) {
    let output = [];
    const dnaToRna = {
        'C' : 'G',
        'G' : 'C',
        'A' : 'U',
        'T' : 'A'
    };

    for (let index in input) {
        // console.log(dnaToRna[input[index]]);
        output.push(dnaToRna[input[index]]);
    };

    return output.join('');
};

NameOfConstructorDoesNotMatter.prototype.toRna('GAT');
// NameOfConstructorDoesNotMatter.prototype.toRna = function(input) {
    // let output = [];
    // let DNAarr = input.toUpperCase().split('');
    // DNAarr.forEach(function(e, i, arr) {
    //     switch (e) {
    //         case 'C':
    //             output.push('G');
    //             break;
    //         case 'G':
    //             output.push('C');
    //             break;
    //         case 'A':
    //             output.push('U');
    //             break;
    //         case 'T':
    //             output.push('A');
    //             break;
    //     }
    // })
    // return output.join('');
// };

//  ##############  Same as
// let NameOfConstructorDoesNotMatter = function () {
//   this.toRna = function(input) {
//     let output = [];
//     let DNAarr = input.toUpperCase().split('');
//     DNAarr.forEach(function(e, i, arr) {
//         switch (e) {
//             case 'C':
//                 output.push('G');
//                 break;
//             case 'G':
//                 output.push('C');
//                 break;
//             case 'A':
//                 output.push('U');
//                 break;
//             case 'T':
//                 output.push('A');
//                 break;
//         }
//     })
//     return output.join('');
//   };
// }

module.exports = NameOfConstructorDoesNotMatter;
