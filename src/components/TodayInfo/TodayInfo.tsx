import { InfoContainer, InfoIcon, InfoText, StyledTodayInfo } from "./style";
import temperature from "../../assets/weather_icons/temperature.png";
import humidity from "../../assets/weather_icons/humidity.png";
import rain from "../../assets/weather_icons/raining.png";
import wind from "../../assets/weather_icons/wind.png";

export default function TodayInfo() {
	return (
		<StyledTodayInfo>
			<InfoContainer>
				<InfoIcon src={temperature} />
				<InfoText>Temperatura</InfoText>
				<InfoText>28ºC</InfoText>
			</InfoContainer>
			<InfoContainer>
				<InfoIcon src={humidity} />
				<InfoText>Umidade</InfoText>
				<InfoText>28%</InfoText>
			</InfoContainer>
			<InfoContainer>
				<InfoIcon src={rain} />
				<InfoText>Chuva</InfoText>
				<InfoText>28%</InfoText>
			</InfoContainer>
			<InfoContainer>
				<InfoIcon src={wind} />
				<InfoText>Vel. Vento</InfoText>
				<InfoText>28Km/h</InfoText>
			</InfoContainer>
		</StyledTodayInfo>
	);
}
