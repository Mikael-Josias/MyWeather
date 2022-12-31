import { ICON_MAP } from "../../constants/iconMap";
import { toWeekday } from "../../utils/utils";
import { StyledTodayCard, TodayWeatherIcon, TodayWeekName } from "./style";

interface TodayCardProps {
	iconCode: number;
}

export default function TodayCard({ iconCode }: TodayCardProps) {
	return (
		<StyledTodayCard>
			<TodayWeekName>{toWeekday[new Date().getDay()]}</TodayWeekName>
			<TodayWeekName>
				{new Date().getDate()}/{new Date().getMonth() + 1} -{" "}
				{new Date().getHours()}:
				{new Date().getMinutes() < 10
					? "0" + new Date().getMinutes()
					: new Date().getMinutes()}
			</TodayWeekName>
			<TodayWeatherIcon src={ICON_MAP.get(iconCode)} />
		</StyledTodayCard>
	);
}
