let a= fetch("https://api.squiggle.com.au/?q=teams");
a.then((response)=>{
    console.log(response.ok);
   return response.json();
}).then((data)=>{
    console.log(data);
    const userdiv =document.createElement("div");
    const table =document.createElement("table");
    const thead= document.createElement("thead");
    const tbody= document.createElement("tbody");

    thead.innerHTML= `<tr>
                         <th>Abbrev</th>
                          <th>Debut</th>
                          <th>Id</th>
                          <th>Logo</th>
                          <th>Name</th>
                          <th>Retirement</th>`;
     data.teams.forEach((user)=>{
        const row= document.createElement("tr");
    row.innerHTML+= `<td> ${user.abbrev}</td>
                          <td>${user.debut}</td>
                          <td>${user.id}</td>
                          <td>${user.logo}</td>
                          <td>${user.name}</td>
                          <td>${user.retirement}</td>`;
   
        tbody.appendChild(row);                  
       table.appendChild(tbody); 
       table.appendChild(thead);                      
       userdiv.appendChild(table);                
    document.body.appendChild(userdiv);
    
})

    const dataString = JSON.stringify(data);
    localStorage.setItem('teamData', dataString);

});
