// create promise chain//
function getdata(dataId){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("successful");
        },2000);
    });
}

//promise chain//
getdata(1)
  .then((res)=>{
    return getdata(2);
  })
  .then((res)=>{
    return getdata(3);
  })
  .then((res)=>{
    console.log(res);
  });