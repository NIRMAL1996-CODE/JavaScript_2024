//reduce method in JS//
//add value1+ value2= result//
//now result become value1 and next index become value 2 n its continuous untill all elements get add//

let a =[1, 2, 3, 4, 5, 6];
let newarray = a.reduce((value1, value2)=>{
  return value1 + value2;
});
console.log(newarray);//output= 21