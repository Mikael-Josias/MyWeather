import { useContext } from "react";
import { WeatherContext } from "../../contexts/WeatherContext";
import Card from "../Card/Card";
import TodayCard from "../TodayCard/TodayCard";
import TodayInfo from "../TodayInfo/TodayInfo";
import { StyledContainer } from "./style";

export default function Container() {
	const weather = useContext(WeatherContext);

	const hour = new Date().getHours();

	const infoProps = {
		temperature: weather?.current_weather.temperature || 0,
		humidity: weather?.hourly.relativehumidity_2m[hour] || 0,
		rain: weather?.hourly.precipitation[hour] || 0,
		wind_speed: weather?.current_weather.windspeed || 0,
	};

	return (
		<StyledContainer>
			<div>
				<TodayCard
					iconCode={
						weather ? weather?.current_weather.weathercode : 0
					}
				/>
				<TodayInfo {...infoProps} />
			</div>

			<Card />
		</StyledContainer>
	);
}
