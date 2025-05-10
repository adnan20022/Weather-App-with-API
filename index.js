async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const url = `https://p2pclouds.up.railway.app/v1/learn/weather?city=${encodeURIComponent(city)}`;

  try {
    const response = await fetch(url,{
      method: "Get",
    });
    const data = await response.json();

    if (response.ok && data.location && data.current) {
      document.getElementById("weatherResult").innerHTML = `
        <h2>${data.location.name}, ${data.location.country}</h2>
        <p>🌡 Temperature: ${data.current.temp_c} °C</p>
        <p>☁ Weather: ${data.current.condition.text}</p>
        <p>💨 Wind Speed: ${data.current.wind_kph} kph</p>
      `;
    } else {
      document.getElementById("weatherResult").innerHTML = `<p>City not found.</p>`;
    }
  } catch (error) {
    console.error("Fetch error:", error);
    document.getElementById("weatherResult").innerHTML = `<p>Error fetching data.</p>`;
  }
}
