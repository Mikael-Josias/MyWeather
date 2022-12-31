import { useContext } from "react";
import { WeatherContext } from "../../contexts/WeatherContext";
import { toWeekday } from "../../utils/utils";
import Card from "../Card/Card";
import TodayCard from "../TodayCard/TodayCard";
import TodayInfo from "../TodayInfo/TodayInfo";
import { StyledContainer, WeekdayList } from "./style";

export default function Container() {
	const weather = useContext(WeatherContext);

	const hour = new Date().getHours();

	const infoProps = {
		temperature: weather?.current_weather.temperature || 0,
		humidity: weather?.hourly.relativehumidity_2m[hour] || 0,
		rain: weather?.hourly.precipitation[hour] || 0,
		wind_speed: weather?.current_weather.windspeed || 0,
	};
	console.log(weather?.daily.time);
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
			<WeekdayList>
				{weather?.daily.time.map((t, i) => (
					<Card
						key={i}
						weather_code={
							weather ? weather.daily.weathercode[i] : 0
						}
						weekday={toWeekday[new Date(t * 1000).getDay()]}
						temperature={
							weather ? weather.daily.temperature_2m_max[i] : 0
						}
					/>
				))}
			</WeekdayList>
		</StyledContainer>
	);
}
