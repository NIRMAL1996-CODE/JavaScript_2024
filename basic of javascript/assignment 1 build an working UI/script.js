
let p =fetch("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json");

p.then((response)=>{
        console.log(response.ok);
        return response.json();
}).then((data)=>{
    console.log(data);
    // const user =data[0];
    const userDiv= document.createElement("div");
    const table =document.createElement("table");
    const tableHeader=document.createElement("thead");
    const tablebody=document.createElement("tbody");
    
    tableHeader.innerHTML =
    `<tr>
         <th>ID</th>
         <th>NAME</th>
         <th>EMAIL</th>
         <th>ROLE</th></tr>`;

     data.forEach((user) => {
        const row= document.createElement("tr");
        row.innerHTML =`
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.role}</td>`;

        tablebody.appendChild(row);
        table.appendChild(tableHeader);
        table.appendChild(tablebody);
        userDiv.appendChild(table);
        document.body.appendChild(userDiv);})
});

/*
simple fetched data n show on page usinf these mehtods//
let promise = fetch("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json");
promise.then((response)=>{
    console.log(response.ok);
    console.log(response.status);
    return response.json();
})
.then((data) => {
    console.log(data);
    // data.forEach((user) => {
        const user= data[0];
        const userDiv = document.createElement("div");
        userDiv.innerHTML = `<p>ID: ${user.id}</p>
                             <p>Name: ${user.name} </p>
                             <p>Email: ${user.email}</p>
                             <p>Role: ${user.role}</p>`;
                             
        document.body.appendChild(userDiv);
});  
*/