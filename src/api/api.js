const apiKey = "81f2cba4d776cfaf0da6c39b2c10d116";

const getWeather = async (city) => {
  return await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  )
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
};

export default getWeather;
