import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const API_KEY = process.env.API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = async (city: string) => {
  const response = await axios.get(BASE_URL, {
    params: {
      q: city,
      appid: API_KEY,
      units: "metric",
      lang: "pt_br",
    },
  });

  const data = response.data;

  return {
    cidade: `${data.name}, ${data.sys.country}`,
    temperatura: `${data.main.temp}°C`,
    sensacao: `${data.main.feels_like}°C`,
    umidade: `${data.main.humidity}%`,
    condicao: data.weather[0].description,
    icone: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
  };
};
