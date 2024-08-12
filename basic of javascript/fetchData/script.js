
document.getElementById('fetchButton').addEventListener('click', () => {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            const userData = `<p>Name: ${user.name.first} ${user.name.last}</p>
                <p>Email: ${user.email}</p>`;
            document.getElementById('userData').innerHTML = userData;
        })
        .catch(error => console.error('Error:', error));
});
