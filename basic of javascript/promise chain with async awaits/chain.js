// create promise chain//
 function getdata(dataId){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("successful");
        },2000);
    });
}
async function getalldata() {
    console.log("getting data 1.....");
    await getdata(1);
    await getdata(2);
    await getdata(3);    
}
getalldata();