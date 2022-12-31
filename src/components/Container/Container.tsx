import { useContext } from "react";
import { WeatherContext } from "../../contexts/WeatherContext";
import Card from "../Card/Card";
import TodayCard from "../TodayCard/TodayCard";
import TodayInfo from "../TodayInfo/TodayInfo";
import { StyledContainer } from "./style";

export default function Container() {
	const weather = useContext(WeatherContext);

	return (
		<StyledContainer>
			<div>
				<TodayCard />
				<TodayInfo />
			</div>

			<Card />
		</StyledContainer>
	);
}
