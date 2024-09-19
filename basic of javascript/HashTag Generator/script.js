let button1 =document.querySelector(".hashtag");
let button2 =document.querySelector(".clear");
let result= document.querySelector(".display");
let input = document.querySelector(".input");

button1.addEventListener("click",()=>{
 let string =input.value;
 let hash = `#${string.trim().split(' ')
    .map((str)=>{
       return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
    })
    .join('')}`;
 result.innerText= hash;
});

button2.addEventListener("click",()=>{
    input.value = '';
    result.innerText = '';
});