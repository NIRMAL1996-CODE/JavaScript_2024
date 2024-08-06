//chatgpt//
const URL="https://jsonplaceholder.typicode.com/posts/1";
const data=document.querySelector("#data");
const button = document.querySelector("#button");


const getdata= async()=>{
    console.log("getting data.....");

    let response= await fetch(URL);
    console.log(response);

    let data1 = await response.json();
    data.innerText = `Title: ${data1.title}\nBody: ${data1.body}`;

};

//mycode
// const URL="https://cat-fact.herokuapp.com/facts";
// const data=document.querySelector("#data");
// const button = document.querySelector("#button");


// const getdata= async()=>{
//     console.log("getting data.....");

//     let response= await fetch(URL);
//     console.log(response);

//     let data1 = await response.json();
//       data.innerText = data1[0].text;
// };

// button.addEventListener("click",getdata);