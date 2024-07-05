//for-of loop helps to put loops on strings and arrays//

/*syntax for for-of loop
for(let elements of iterable) 
{
  do some work here 
}

iterable is a collection of items (like an array or a string).
element represents each item in the iterable.
The loop goes through each item in the iterable, one by one, and executes the code inside the loop for each item

*/
//write a program using for-of loop in js//
let size=0;
let str="NIRMAL JAISWAL";
for(let i of str)//here it automatically takes the values and print//
{
    console.log("string=",i);
    size++;
}
console.log("string size=", size);//its tells the size//