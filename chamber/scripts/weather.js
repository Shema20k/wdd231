const apiKey = "86b91c03a01b1c197d8302d8d3223ca0";
const lat = -1.95;
const lon = 30.06;

async function getWeather() {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);
    if (!response.ok) throw new Error("API request failed");
    const data = await response.json();
    document.getElementById("current-temp").textContent = data.main.temp.toFixed(1);
    document.getElementById("weather-desc").textContent = data.weather[0].description;
  } catch (error) {
    console.error("Weather fetch error:", error);
    document.getElementById("weather-desc").textContent = "Unable to fetch weather data.";
  }
}

getWeather();
