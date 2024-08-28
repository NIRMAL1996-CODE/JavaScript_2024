
// Access the input field, button, and image container
const inputField = document.getElementById('text');
const generateButton = document.getElementById('btn');
const qrImage = document.getElementById('img');
const imgBox = document.getElementById('imgbox');

// Add an event listener to the button
generateButton.addEventListener('click', function() {
    // Get the text from the input field
    const text = inputField.value;

    // Construct the URL for the QR code API
    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(text)}`;

    // Set the QR code image source
    qrImage.src = apiUrl;

    // Make sure imgBox is visible
    imgBox.style.display = 'block';
});
