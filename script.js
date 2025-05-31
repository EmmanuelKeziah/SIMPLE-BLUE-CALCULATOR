const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let userInput = '';
const operators = ['+', '-', '*', '/'];
buttons.forEach(button =>{
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            userInput = ""; //Takes the input back to an empty string
            display.textContent = ''; 
        } else if (value === "=") {
            try {
                userInput = eval(userInput);
                display.textContent = userInput;
            } catch (error) {
                display.textContent = 'Error';
            }
        } 
        else {
            const lastChar = userInput[userInput.length - 1];
        }
    });
});