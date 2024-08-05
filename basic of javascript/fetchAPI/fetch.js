const URL=" https://cat-fact.herokuapp.com/facts";
const fact = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getfacts= async()=>{
    console.log("getting data.....");

    let response= await fetch(URL);
    console.log(response);

    let data = await response.json();
    fact.innertext= data[0].text;
};

btn.addEventListener("click",getfacts);
