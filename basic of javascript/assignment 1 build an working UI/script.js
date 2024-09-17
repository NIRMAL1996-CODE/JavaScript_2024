//fetching data using url
let p =fetch("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json");
p.then((response)=>{
        console.log(response.ok);
        return response.json();
}).then((data)=>{
    console.log(data);

    //adding rows to table
    const tablebody= document.querySelector("tbody");
    const createRows = (data) => {
        tablebody.innerHTML = '';
     data.forEach((user) => {
        const row= document.createElement("tr");
        row.innerHTML =`
        <td><input type="checkbox" class="row-checkbox"></td>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.role}</td>
        <td><button id="edit"><i class="fa-solid fa-pen-to-square"></i></button></td>
        <td><button id="del"><i class="fa-solid fa-trash"></i></button></td>`;

        tablebody.appendChild(row);
     });
    };

    createRows(data);
    
    //adding events to search button
    const searchbutton =document.querySelector("#searchButton");
    const searchquery= document.querySelector("#searchInput");

     searchbutton.addEventListener("click", ()=>{
            const searchTerm= searchquery.value.toLowerCase();
            const filteredData= data.filter(user=>{
                const field= [user.id, user.name, user.email, user.role];
                return field.some(field=> field.toLowerCase().includes(searchTerm));      
        });
        createRows(filteredData);
     });

     //events to checkboxes
     const selectALLcheckbox= document.querySelector(".selectAll");
     selectALLcheckbox.addEventListener("change",()=>{
      const rowcheckbox= document.querySelectorAll(".row-checkbox");
        rowcheckbox.forEach((checkbox)=>{
            checkbox.checked = selectALLcheckbox.checked;
        });
     });

     //create pagination 
            const firstPage = document.querySelector("#firstpage");
         const previousPage = document.querySelector("#previouspage");
         const nextPage = document.querySelector("#nextpage");
         const lastPage = document.querySelector("#lastpage");

            const itemsInPage= 10;
            let currentPage= 1;
            const totalPages= Math.ceil(data.length/ itemsInPage);
            const displayPage= (page)=>{
               const start= (currentPage-1)*itemsInPage;
               const end= start+itemsInPage;
               const paginatedData= data.slice(start,end);//till here sliced the data, that send to createrows(), which than show rows
               createRows(paginatedData);

                  firstPage.disabled = (currentPage === 1);
            previousPage.disabled = (currentPage === 1);
            nextPage.disabled = (currentPage === totalPages);
            lastPage.disabled = (currentPage === totalPages);

            const pagenumber= document.querySelector("#pageInfo");
            pagenumber.textContent = `Page ${currentPage} of ${totalPages}`;
     };
     displayPage(currentPage);

     //add events to buttons.
     firstPage.addEventListener("click",()=>{
      currentPage=1;
      selectALLcheckbox.checked = false; 
      displayPage(currentPage);
      });

     previousPage.addEventListener("click",()=>{
      if(currentPage>1)
         currentPage--;
      selectALLcheckbox.checked = false; 
      displayPage(currentPage);
     });
     
     nextPage.addEventListener("click",()=>{
      if(currentPage<totalPages)
         currentPage++;
      selectALLcheckbox.checked = false; 
      displayPage(currentPage);
     });

     lastPage.addEventListener("click",()=>{
      currentPage=totalPages;
      selectALLcheckbox.checked = false; 
      displayPage(currentPage);
     });
   
     //add events to deleteALLselected button
     const del =document.querySelector(".deleteselected");
     del.addEventListener("click",()=>{
      const selectALLcheckboxes= document.querySelectorAll(".row-checkbox:checked");
      selectALLcheckboxes.forEach((checkbox)=>{
           const row= checkbox.closest("tr");
           const userId = row.children[1].textContent; 
           row.remove();
           const updatedData = data.filter(user => user.id !== userId);
           data = updatedData;
      });
    });

    const delbutton= document.querySelectorAll("#del");
    delbutton.forEach((button)=>{
      button.addEventListener("click",(event)=>{
         const row = event.target.closest("tr");
         const userId =row.children[1].textContent;
         row.remove();
         data = data.filter(user => user.id !== userId);
      });
    });

    const edit= document.querySelectorAll("#edit");
    edit.forEach((button)=>{
      button.addEventListener("click",(event)=>{
         const row= event.target.closest("tr");
         const userId = row.children[1].textContent;
         const userName =row.children[2].textContent;
         const userEmail =row.children[3].textContent;
         const userRole =row.children[4].textContent;

      //    document.querySelector('#edit-id').value = userId;
      //   document.querySelector('#edit-name').value = userName;
      //   document.querySelector('#edit-email').value = userEmail;
      //   document.querySelector('#edit-role').value = userRole;
    });
    });
 });
     

