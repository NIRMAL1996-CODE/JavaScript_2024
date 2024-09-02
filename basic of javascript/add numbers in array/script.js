//add numbers in array using JS//
let arr= [10, 24, 33, 44, 50];
let a;
do{
    a=prompt("Enter a number = ");//input from user//
    a= Number.parseInt(a);// coverting sting into a number (because prompt always a string)//
    arr.push(a); //push method helps add elements at the end of the array//
}while(a!=0)

    console.log(arr);

    // lets perform filter to this array//

    let n= arr.filter((value)=>{
        return value % 10 == 0;
    });

    console.log("filtered numbers= ",n );