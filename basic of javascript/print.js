// write a program to print 3 variables, words, text and number together.//
let a=10;
let b=20;
let c=30;
console.log(a,b,c);

//to print words together//
console.log("learning","basics","of","javaScript");

//to print text and numbers together//
let age =27;
console.log("my age is", age);//u can use "+" operator as well instead of coma//
//+ operator 1st covert age into txt than add it to the statment and print it//

//DIFFERENCE BETWEEN var, let, const//
/*function scope means variables declared with var are  accessible within the entire function where they are defined , regardless of blocked boundaries within that function

blocked scope in js means variables declared with let or const are only accessible within the blocked {} where they are defined*/

//1. in js, var stands for variable, it is function-scoped and can be redeclared.//
var d =6;
console.log(d);
d=23;
console.log(d);//no error wi;; occure//

//2. in js, let is blocked-scoped and can be reassigned but not redeclared //

let x=2;
console.log(x);
x=3;
console.log(x);//error will not occure but//
/*let x=6; this redeclare will give you error its not allowed
console.log(x);*/

//3.in js, const is blocked- scoped and cannot be reassigned or redeclared//
const v=2;
console.log(v);
v=5;
console.log(v);
/*const v=6; 
console.log(v);  this will show error*/
