// filter method in JS//
// it filters an array with values that passes a condition and creates new array//
//does not change existing array//

let a =[1, 32, 3, 14, 5 ];
let a1= a.filter((value)=>{
    return value < 10;
});

console.log(a1);