document.getElementById('get-weather-btn').addEventListener('click', fetchWeather);

function fetchWeather() {
    const location = document.getElementById('location').value;
    const apiKey = 'API_KEY'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeatherData(data);
            } else {
                alert('Location not found. Please enter a valid location.');
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeatherData(data) {
    document.getElementById('weather-location').textContent = `Location: ${data.name}, ${data.sys.country}`;
    document.getElementById('weather-description').textContent = `Condition: ${data.weather[0].description}`;
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
    document.querySelector('.weather-data').style.display = 'block';
}
