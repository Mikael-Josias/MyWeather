import { DaySpan, DayWeather, WeekdayCard } from "./style";
import sun from "../../assets/weather_icons/sun.png";
import { ICON_MAP } from "../../constants/iconMap";

interface CardProps {
	weather_code: number;
	weekday: string;
	temperature: number;
}

export default function Card({
	weather_code,
	weekday,
	temperature,
}: CardProps) {
	return (
		<WeekdayCard>
			<DayWeather src={ICON_MAP.get(weather_code)} />
			<DaySpan dayName={true}>{weekday}</DaySpan>
			<DaySpan dayName={false}>{temperature}ºC</DaySpan>
		</WeekdayCard>
	);
}
