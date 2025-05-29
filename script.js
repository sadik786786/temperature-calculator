// DOM Elements
const tempInput = document.getElementById("temperature");
const fromUnit = document.getElementById("from-unit");
const toUnit = document.getElementById("to-unit");
const resultDiv = document.getElementById("result");
const resetBtn = document.getElementById("reset-btn");

// Convert Temperature Function
function convertTemperature() {
    const inputValue = parseFloat(tempInput.value);
    
    if (isNaN(inputValue)) {
        resultDiv.textContent = "-";
        return;
    }

    const from = fromUnit.value;
    const to = toUnit.value;
    let result;

    // Convert to Celsius first (as intermediate step)
    let celsius;
    switch (from) {
        case "celsius":
            celsius = inputValue;
            break;
        case "fahrenheit":
            celsius = (inputValue - 32) * 5/9;
            break;
        case "kelvin":
            celsius = inputValue - 273.15;
            break;
    }

    // Convert from Celsius to target unit
    switch (to) {
        case "celsius":
            result = celsius;
            break;
        case "fahrenheit":
            result = (celsius * 9/5) + 32;
            break;
        case "kelvin":
            result = celsius + 273.15;
            break;
    }

    // Display result with 2 decimal places and unit symbol
    const symbols = { celsius: "°C", fahrenheit: "°F", kelvin: "K" };
    resultDiv.textContent = `${result.toFixed(2)} ${symbols[to]}`;
}

// Reset Function
function resetConverter() {
    tempInput.value = "";
    fromUnit.value = "celsius";
    toUnit.value = "fahrenheit";
    resultDiv.textContent = "-";
    tempInput.focus();
}

// Event Listeners
tempInput.addEventListener("input", convertTemperature);
fromUnit.addEventListener("change", convertTemperature);
toUnit.addEventListener("change", convertTemperature);
resetBtn.addEventListener("click", resetConverter);

// Initialize
resetConverter();