let a = async()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject(new Error(" REQUEST HAS FAILED"));
           },3000);
});
};

a()
  .then(() => {
    console.log("Promise resolved successfully!");
  })
  .catch((error) => {
    console.error(error);
  });