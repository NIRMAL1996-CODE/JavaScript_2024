//write a program on different conditional statements in js//
//1. if...else statment//
let age= 23;
if(age>=18)
{
    console.log("ADULT");
}
else
{
console.log(minor);
}

//2.find number is odd or even//
let num=8;
if(num%2==0)
{
    console.log("EVEN");
}
else
{
    console.log("ODD");
}

//3. use AND operators//
//find given number is three digit number or not.//
let number=24;
if(number>=100 && number<=999)
{
    console.log("NUMBER IS THREE DIGIT NUMBER");
}
else{
    console.log("NUMBER IS NOT THREE DIGIT NUMBER");
}

//4. triple equals(===) used for actual comparison in js//

//In, JS == compares values with type conversion, === compares values without type conversion//
//type conversion means conversion of values from one datatype to another datatype//

let x="4";
let y=4;
console.log("double equals= ", x==y);//its only look values n compare //
console.log("triple equals= ",x===y);//but this will do actual comparison// 