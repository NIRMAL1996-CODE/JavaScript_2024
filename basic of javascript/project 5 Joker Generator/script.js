
// const displayJoke = document.getElementById("display");
// const fetchData = document.getElementById("fetch");

// fetchData.addEventListener("click", () => {
//     fetch('https://official-joke-api.appspot.com/random_joke')
//         .then(response => response.json()) // Convert response to JSON
//         .then(data => {
//         displayJoke.textContent = `${data.setup} - ${data.punchline}`;// Show joke
//         })
//         .catch(error => {
//             displayJoke.textContent = 'Sorry, there was an error fetching the joke.'; // Error message
//             console.error('Error:', error);
//         });
// });

// another method
const displayJoke = document.getElementById("display");
const fetchData = document.getElementById("fetch");

async function getJoke() {
    try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const data = await response.json();
        displayJoke.textContent = data.setup + ' - ' + data.punchline;
    } catch (error) {
        displayJoke.textContent = 'Sorry, there was an error fetching the joke.';
        console.error('Error:', error);
    }
}

fetchData.addEventListener("click", getJoke);


