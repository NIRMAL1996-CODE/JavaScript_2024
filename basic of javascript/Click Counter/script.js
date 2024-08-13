let count = 0;

document.getElementById('clickButton').addEventListener('click', () => {
    count++;
    document.getElementById('clickCount').textContent = count;
});
