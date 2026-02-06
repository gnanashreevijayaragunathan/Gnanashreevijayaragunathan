const weatherData = [
    { city: "Andra", temperature: "32°C", condition: "Sunny" },
    { city: "Thailand", temperature: "25°C", condition: "Cloudy" },
    { city: "Newyork", temperature: "35°C", condition: "Hot" },
    { city: "Delhi", temperature: "30°C", condition: "Humid" }
];
function getWeather() {
    const cityInput = document.getElementById("cityInput").value.trim();
    const weatherResult = document.getElementById("weatherResult");
    const errorMsg = document.getElementById("errorMsg");

    weatherResult.innerHTML = "";
    errorMsg.innerHTML = "";

    const cityWeather = weatherData.find(
        item => item.city.toLowerCase() === cityInput.toLowerCase()
    );

    if (cityWeather) {
        weatherResult.innerHTML = `
            <p><strong>City:</strong> ${cityWeather.city}</p>
            <p><strong>Temperature:</strong> ${cityWeather.temperature}</p>
            <p><strong>Condition:</strong> ${cityWeather.condition}</p>
        `;
    } else {
        errorMsg.innerHTML = "City not found. Please try again!";
    }
}












