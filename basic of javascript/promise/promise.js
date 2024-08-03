// how to access a promise //
const getpromise=()=>{
      return new Promise((resolve, reject)=>{
        console.log("hello, promise");
        resolve("success");
        //reject("error");
     });
}

let promise= getpromise();
promise.then((res)=>{
    console.log("promise fulfilled",res);
});

promise.catch((err)=>{
    console.log("rejected",err);
});