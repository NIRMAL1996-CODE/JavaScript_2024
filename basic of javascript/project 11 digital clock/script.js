let date= document.querySelector(".time");
let showdate= document.querySelector(".showdate");
let hours = document.querySelector("#hour");
let minutes = document.querySelector("#min");
let seconds = document.querySelector("#sec");

    // let currentTime= new Date();
    //  console.log(currentTime);
    //  showdate.value = currentTime.toString();

    //  hours.innerHTML = currentTime.getHours();
    //  minutes.innerHTML = currentTime.getMinutes();
    //  seconds.innerHTML = currentTime.getSeconds();



function updateTime() {
    let currentTime = new Date();
    hours.innerHTML = currentTime.getHours();
    minutes.innerHTML = currentTime.getMinutes();
    seconds.innerHTML = currentTime.getSeconds();
    showdate.value = currentTime.toString();
}

setInterval(updateTime, 1000);
updateTime(); // Call once to initialize
