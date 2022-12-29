import { useContext } from "react";
import { WeatherContext } from "../../contexts/WeatherContext";

export default function Container() {
	const weather = useContext(WeatherContext);

	return (
		<div>
			<h1>MyWeather</h1>
			<div className="data">
				<span>
					Temperatura: {weather?.current_weather.temperature}
					{weather?.daily_units.temperature_2m_max}
				</span>
				<br />
				<span>Humidade: {weather?.hourly.relativehumidity_2m[0]}</span>
				<br />
				<span>Chuvas: {weather?.daily.precipitation_sum[0]}</span>
				<br />
				<span>Ventos: {weather?.current_weather.windspeed}</span>
				<br />
			</div>
		</div>
	);
}
