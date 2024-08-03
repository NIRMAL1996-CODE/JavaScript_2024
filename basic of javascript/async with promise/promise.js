//  asynchronous function => access promise//
function asyncfun(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data1");
            resolve("successful");
        }, 4000);
    });
}

console.log("fetching data1...");
let p1= asyncfun();
p1.then((res)=>{
    console.log(res);
});