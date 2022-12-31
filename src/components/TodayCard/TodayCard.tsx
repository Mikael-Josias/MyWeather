import sun from "../../assets/weather_icons/sun.png";
import { StyledTodayCard, TodayWeatherIcon, TodayWeekName } from "./style";

export default function TodayCard() {
	return (
		<StyledTodayCard>
			<TodayWeekName>Segunda</TodayWeekName>
			<TodayWeekName>26/12 - 12:34</TodayWeekName>
			<TodayWeatherIcon src={sun} />
		</StyledTodayCard>
	);
}
