const apiKey = "86b91c03a01b1c197d8302d8d3223ca0";
const lat = -1.95;
const lon = 30.06;

async function getWeather() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
    );
    if (!response.ok) throw new Error("API request failed");
    const data = await response.json();
    const current = data.list[0];
    document.getElementById("current-temp").textContent = current.main.temp.toFixed(1);
    document.getElementById("weather-desc").textContent = current.weather[0].description;
    const forecastDays = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);
    const forecastContainer = document.getElementById("forecast");
    forecastContainer.innerHTML = "";
    forecastDays.forEach(day => {
      const date = new Date(day.dt_txt);
      const dayName = date.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" });
      forecastContainer.innerHTML += `<p>${dayName}: ${day.main.temp.toFixed(1)}°C - ${day.weather[0].description}</p>`;
    });
  } catch (error) {
    console.error("Weather fetch error:", error);
    document.getElementById("weather-desc").textContent = "Unable to fetch weather data.";
  }
}

getWeather();
