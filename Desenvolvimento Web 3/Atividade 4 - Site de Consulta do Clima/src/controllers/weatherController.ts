import { Request, Response } from "express";
import { fetchWeather } from "../services/weatherService";

export const getWeather = async (req: Request, res: Response) => {
  try {
    const city = req.params.city;

    if (!city) {
      return res.status(400).json({ error: "Informe o nome da cidade!" });
    }

    const weatherData = await fetchWeather(city);
    res.json(weatherData);
  } catch (error) {
    res.status(404).json({ error: "Cidade não encontrada ou erro na API." });
  }
};
