

const displayquote = document.getElementById("text"); 
const button = document.getElementById("btn"); 

async function getquote() {
    try {
        const response = await fetch("https://api.quotable.io/random"); 
        const data = await response.json();
        displayquote.textContent = data.content; 
    } catch (error) {
        displayquote.textContent = 'Sorry, there was an error fetching the quote.'; 
        console.error('Error:', error);
    }
}

button.addEventListener('click', getquote);
