const weatherData = [
  { date: "2020-11-01", temperature: 70, precipitation: 0.2, humidity: 0.6 },
  { date: "2020-11-02", temperature: 72, precipitation: 0.1, humidity: 0.5 },
  { date: "2020-11-03", temperature: 75, precipitation: 0.3, humidity: 0.7 },
  { date: "2020-11-04", temperature: 74, precipitation: 0.4, humidity: 0.8 },
  { date: "2020-11-05", temperature: 73, precipitation: 0.2, humidity: 0.6 },
  { date: "2020-11-06", temperature: 71, precipitation: 0.1, humidity: 0.5 },
  { date: "2020-11-07", temperature: 70, precipitation: 0.3, humidity: 0.7 },
  { date: "2020-11-08", temperature: 69, precipitation: 0.4, humidity: 0.8 },
  { date: "2020-11-09", temperature: 68, precipitation: 0.2, humidity: 0.6 },
  { date: "2020-11-10", temperature: 67, precipitation: 0.1, humidity: 0.5 },
];

function getWeatherByDate(date: string) {
  return weatherData.find((day) => day.date === date);
}

const date = "2020-11-02";
const weather = getWeatherByDate(date);

if (weather) {
  console.log(
    `The weather on ${date} was ${weather.temperature}°F with ${
      weather.precipitation
    } inches of precipitation and a humidity of ${weather.humidity * 100}%`
  );
}
