// asynchronous function using settimeout
function getdata(dataId){
    //2s
    setTimeout(() => {
        console.log("data", dataId);
      }, 2000);
}
getdata(1);