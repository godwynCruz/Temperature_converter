const textBox = document.getElementById("text_box");
const toFahrenheit = document.getElementById("to_fahrenheit");
const toCelsius = document.getElementById("to_celsius");
const result = document.getElementById("result");
let temp;

function convert() {
    if(toFahrenheit.checked) {
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F"
    }
    else if(toCelsius.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C"
    }
    else{
        result.textContent = "Select a unit."
    }
}