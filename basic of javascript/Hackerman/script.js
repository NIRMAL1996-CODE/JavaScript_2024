const delay = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};

const printMessage = (message) => {
    const outputElement = document.getElementById('output');
    outputElement.innerHTML += message + '<br>';
};

const myAsyncFunction = async () => {
    printMessage("Hacking process initiated...");
    await delay(3000); 

    printMessage("Initialising Hacker program....");
    await delay(2000); 

    printMessage('Hacking "Nirmal"....');
    await delay(2000); 

    printMessage('Username found "Nirmal11"....');
    await delay(2000); 

    printMessage('Connecting to Facebook....');
    await delay(2000); 

    printMessage('Getting the password');
    await delay(2000); 

    printMessage('Password: 2345******');
};

myAsyncFunction();
