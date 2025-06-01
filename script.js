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
            const lastChar = userInput.slice (-1);
            if (['+', '-', '*', '/'].includes(value) && ['+', '-', '*', '/'].includes(lastChar)) {
                return;
            } else if (userInput === '' && ['-', '*', '/'].includes(value)) {
                return;
            } else if (value === '.' && lastChar === '.') {
                return;
            } else {
                userInput += value;
                display.textContent = userInput;
            }
        }
        });
    });

    const keyBoardClicks = document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (key === 'Enter') {
        try {
            userInput = eval(userInput);
            display.textContent = userInput;
        } catch (error) {
            display.textContent = 'Error';
        }
    }
    else if (key === 'Backspace') {
        userInput = userInput.slice(0, -1);
        display.textContent = userInput;
    } else if (key === 'Escape') {
        userInput = '';
        display.textContent = '';

    } else if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
        const lastChar = userInput.slice(-1); 
        if (['+', '-', '*', '/'].includes(key) && ['+', '-', '*', '/'].includes(lastChar)) {
            return;
        } if (userInput === '' && ['-', '*', '/'].includes(key)) {
            return;
        } if (key === '.') {
            const lastNumber = userInput.split(/[\+\-\*\/]/).pop();
            if (lastNumber.includes('.')) {
                return;
            }
        } else {
            userInput += key;
            display.textContent = userInput;
        }
    }

});