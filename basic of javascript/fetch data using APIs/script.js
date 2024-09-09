//basic syntax practice//
let facts = fetch("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json");
facts.then((response)=>{
    console.log(response.status);
    if(response.ok){
        return response.json;
    }else {
        throw new Error("Network response was not ok");
      }
})
.then((data)=>{
    console.log(data);
})
.catch((error) => {
    console.log("Request failed:", error);
  });

  //You can customize your request by adding options like method, headers, and body to the fetch() function.
  fetch("https://api.example.com/data", {
    method: 'POST', // Specify the HTTP method (GET, POST, etc.)
    headers: {
      'Content-Type': 'application/json' // Specify the content type of the request
    },
    body: JSON.stringify({
      key: "value" // Data to send with the request (for POST requests)
    })
  })
    .then((response) => {
      if (response.ok) {
        return response.json(); // Parse the response as JSON
      } else {
        throw new Error("Network response was not ok");
      }
    })
    .then((data) => {
      console.log(data); // Log the parsed data
    })
    .catch((error) => {
      console.log("Request failed:", error); // Handle errors
    });
  