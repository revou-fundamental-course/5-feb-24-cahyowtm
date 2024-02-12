// Fungsi untuk mengonversi suhu dari Celcius ke Fahrenheit
function convertToFar() {
    var celcius = document.getElementById('inputCelcius').value;
    var fahrenheit = (celcius * 9/5) + 32;
    document.getElementById('inputFahrenheit').value = fahrenheit;
    document.getElementById('calculation').value = celcius + "°C * 9/5 + 32 = " + fahrenheit + "°F";
}

// Fungsi untuk mereset nilai input dan hasil konversi
function reset() {
    document.getElementById('inputCelcius').value = '';
    document.getElementById('inputFahrenheit').value = '';
    document.getElementById('calculation').value = '';
}

// Fungsi untuk mengonversi suhu dari Fahrenheit ke Celcius
function reverse() {
    var celcius = document.getElementById('inputFahrenheit').value;
    var fahrenheit = (celcius - 32) * 5/9;
    document.getElementById('inputCelcius').value = fahrenheit.toFixed(2);
    document.getElementById('calculation').value = celcius + "°F - 32 * 5/9 = " + fahrenheit.toFixed(2) + "°C";
}
