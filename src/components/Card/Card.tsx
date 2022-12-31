import { DaySpan, DayWeather, WeekdayCard } from "./style";
import sun from "../../assets/weather_icons/sun.png";

export default function Card() {
	return (
		<WeekdayCard>
			<DayWeather src={sun} />
			<DaySpan dayName={true}>terça</DaySpan>
			<DaySpan dayName={false}>28ºC</DaySpan>
		</WeekdayCard>
	);
}
