// 1. Select the display container and all the buttons
const display = document.getElementById('screen');
const buttons = document.querySelectorAll('button');

// This variable will hold the running string of numbers and operators
let calculationString = "";

// 2. Loop through every button to attach a click listener
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // .trim() cuts out any hidden spaces, tabs, or newlines from your HTML buttons!
        const buttonText = button.innerText.trim();

        // 3. Handle the logic based on which button was clicked
        if (buttonText === 'AC') {
            // Clear everything
            calculationString = "";
            display.innerText = "0";
        } 
        else if (buttonText === '=') {
            // Calculate the result
            try {
                if (calculationString === "") return;

                // Evaluate the math string
                let result = eval(calculationString);
                
                // Display the calculated result
                display.innerText = result;
                
                // Update our tracking string so we can keep calculating using the result
                calculationString = result.toString();
            } catch (error) {
                // If the user inputs invalid math, show an error
                display.innerText = "Error";
                calculationString = "";
            }
        } 
        else {
            // For numbers and operators, append them to the calculation string
            calculationString += buttonText;
            display.innerText = calculationString;
        }
    });
});