//guess a number using JS
let num = Math.floor(Math.random()* 100)+ 1;// +1 becoz to get numbers from 1 to 100 otherwise it will show 0 to 99 only
console.log(num);

let score=0; //to count the number of guessing
let input= parseInt(prompt("Enter a number between 1-100 "));// parseint is used to covert string into number

while(input !== num){
    if(input> num)
    alert("Your number is greater");
    else 
    alert("Your number is lessor");
    input= parseInt(prompt("Enter a number between 1-100 "));
    score++;
}

alert("Congratulations! your guessing is correct and your score = " + score);