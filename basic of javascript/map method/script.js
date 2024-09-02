// Map mehtod using JavaScript to create new array and forEach loop we use when we need to perform some operation on existing array//

let arr= [1, 2 ,3 ,4 ,5 ];
arr.map((value) =>{
  console.log(value);
});

//create new array

let arr2=arr.map((value)=>{
    // console.log(value);
    return value +2 ;
});

console.log(" second Array " + arr2);
