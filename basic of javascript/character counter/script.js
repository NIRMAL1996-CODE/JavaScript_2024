let string=document.getElementById("str");
let char =document.getElementById("char");
let countbtn= document.getElementById("count");
let clearbtn= document.getElementById("clear");
let result = document.querySelector(".result");

countbtn.addEventListener("click", ()=>{
    let count=0;
     let str= string.value.toLowerCase();;
     let character =char.value.toLowerCase();;

     for(let i =0; i<str.length; i++)
     {
        if(str[i]===character)
        {
            count++;
        }
     }
     result.textContent= `${count}`;
});

clearbtn.addEventListener("click",()=>{
    string.value = '';
    char.value='';
    result.innerText = '';
});
