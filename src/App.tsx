import axios from "axios";
import { useEffect, useState } from "react";

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

function App() {
	const [data, setData] = useState<WeatherData | null>(null);

	useEffect(() => {
		const promisse = axios.get(
			"https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relativehumidity_2m,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum&current_weather=true&timeformat=unixtime&timezone=America%2FSao_Paulo"
		);
		promisse.then((res) => {
			console.log(res.data);
			setData(res.data);
		});
		promisse.catch((err) => {
			console.log(err.message);
		});
	}, []);

	return (
		<div className="App">
			<h1>MyWeather</h1>
			<div className="data">
				<span>
					Temperatura: {data?.current_weather.temperature}
					{data?.daily_units.temperature_2m_max}
				</span>
				<br />
				<span>Humidade: {data?.hourly.relativehumidity_2m[0]}</span>
				<br />
				<span>Chuvas: {data?.daily.precipitation_sum[0]}</span>
				<br />
				<span>Ventos: {data?.current_weather.windspeed}</span>
				<br />
			</div>
		</div>
	);
}

export default App;
