import axios from "axios";
import { createContext, useState, useEffect } from "react";

interface WeatherData {
	latitude: number;
	longitude: number;
	generationtime_ms: number;
	utc_offset_seconds: number;
	timezone: string;
	timezone_abbreviation: string;
	elevation: number;
	current_weather: {
		temperature: number;
		windspeed: number;
		winddirection: number;
		weathercode: number;
		time: number;
	};
	hourly_units: {
		time: string;
		temperature_2m: string;
		relativehumidity_2m: string;
		precipitation: string;
		weathercode: string;
		windspeed_10m: string;
	};
	hourly: {
		time: number[];
		temperature_2m: number[];
		relativehumidity_2m: number[];
		precipitation: number[];
		weathercode: number[];
		windspeed_10m: number[];
	};
	daily_units: {
		time: string;
		weathercode: string;
		temperature_2m_max: string;
		temperature_2m_min: string;
		precipitation_sum: string;
	};
	daily: {
		time: number[];
		weathercode: number[];
		temperature_2m_max: number[];
		temperature_2m_min: number[];
		precipitation_sum: number[];
	};
}

type WeatherProviderProps = {
	children: React.ReactNode;
};

export const WeatherContext = createContext<WeatherData | null>(null);

export default function WeatherProvider({ children }: WeatherProviderProps) {
	const [weather, setWeather] = useState<WeatherData | null>(null);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			({ coords }) => {
				getDataFromApi(
					coords.latitude,
					coords.longitude,
					Intl.DateTimeFormat().resolvedOptions().timeZone
				);
			},
			() => {
				alert("Desculpe! Não conseguimos carregar os dados");
			}
		);
	}, []);

	function getDataFromApi(lat: number, long: number, timezone: string) {
		const promisse = axios.get(
			"https://api.open-meteo.com/v1/forecast?hourly=temperature_2m,relativehumidity_2m,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum&current_weather=true&timeformat=unixtime",
			{ params: { latitude: lat, longitude: long, timezone } }
		);

		promisse.then((res) => {
			setWeather(res.data);
		});
		promisse.catch((err) => {
			alert(
				"Erro ao buscar as informações!\n Tente novamente mais tarde"
			);
		});
	}

	return (
		<WeatherContext.Provider value={weather}>
			{children}
		</WeatherContext.Provider>
	);
}
