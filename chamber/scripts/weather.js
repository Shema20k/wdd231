const apiKey = "YOUR_API_KEY";
const lat = -1.95;
const lon = 30.06;

fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    const weather = document.getElementById("weather");
    const current = data.list[0];
    const forecast = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);

    weather.innerHTML = `
      <h2>Weather</h2>
      <p>Current: ${current.main.temp}°C - ${current.weather[0].description}</p>
      ${forecast.map(day => `<p>${new Date(day.dt_txt).toDateString()}: ${day.main.temp}°C</p>`).join("")}
    `;
  });
