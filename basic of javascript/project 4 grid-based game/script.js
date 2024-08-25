const boxes = document.querySelectorAll(".box");
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");
const recordElement = document.getElementById('record');

let startTime;
const responseTimes = [];

// Start button functionality
startButton.addEventListener("click", () => {
    lightRandomBox();
});

// Function to light a random box
function lightRandomBox() {
    boxes.forEach(box => box.classList.remove('lit')); // Remove 'lit' class from all boxes

    let randomIndex = Math.floor(Math.random() * boxes.length); // Generate random index
    let randomBox = boxes[randomIndex]; // Select random box
    randomBox.classList.add('lit'); // Add 'lit' class to the selected box
    startTime = Date.now(); // Record start time
}

// Reset button functionality
resetButton.addEventListener("click", () => {
    responseTimes.length = 0; // Clear response times
    boxes.forEach(box => box.classList.remove('lit')); // Remove 'lit' class from all boxes
});

// Add click event to each box
boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (box.classList.contains('lit')) { // Check if the box has the 'lit' class
            const endTime = Date.now(); // Record end time
            const responseTime = endTime - startTime; // Calculate response time
            responseTimes.push(responseTime); // Store response time
            recordElement.innerText = 'Response Time: ' + responseTime + ' ms'; // Display response time
            lightRandomBox(); // Light another random box
        }
    });
});
