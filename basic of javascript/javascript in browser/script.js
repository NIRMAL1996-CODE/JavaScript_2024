// //create function to create a element in html using javascript//
// // create using callbacks//

// // function load(src, callback) {
// //        let script= document.createElement("script");
// //          script.src= src;
// //          script.onload= function(){
// //             console.log("loaded script with src" + src);
// //             callback(src);
// //          }
// //             document.body.appendChild(script);
// //          }
    
// //          function hello(src){
// //             alert("HELLO " + src);
// //          }

// //     load("https://kit.fontawesome.com/0593b7ef97.js", hello);

// // create using promise//
// async function load(src) {
//     return new Promise((resolved, reject)=>{
//         let script= document.createElement("script");
//         script.src= src;
//         script.onload= function(){
//            resolved(src);
//            script.onerror = () => reject(new Error("Script failed to load"));
//            document.body.appendChild(script);
//         }
// });  
// }
//     load("https://kit.fontawesome.com/0593b7ef97.js");

// Function to load a script and return a Promise
function load(src) {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve(src); // Resolve the Promise when the script loads
        script.onerror = () => reject(new Error("Script failed to load")); // Reject the Promise if there’s an error
        document.body.appendChild(script);
    });
}

// Using .then() and .catch() to handle the Promise
load("https://kit.fontawesome.com/0593b7ef97.js")
    .then(src => {
        console.log("Script loaded successfully:", src); // Success message
    })
    .catch(error => {
        console.error(error); // Error message if something goes wrong
    });
