import { InfoContainer, InfoIcon, InfoText, StyledTodayInfo } from "./style";
import temperatureIcon from "../../assets/weather_icons/temperature.png";
import humidityIcon from "../../assets/weather_icons/humidity.png";
import rainIcon from "../../assets/weather_icons/raining.png";
import windIcon from "../../assets/weather_icons/wind.png";

interface TodayInfoProps {
	temperature: number;
	humidity: number;
	rain: number;
	wind_speed: number;
}

export default function TodayInfo({
	temperature = 0,
	humidity = 0,
	rain = 0,
	wind_speed = 0,
}: TodayInfoProps) {
	return (
		<StyledTodayInfo>
			<InfoContainer>
				<InfoIcon src={temperatureIcon} />
				<InfoText>Temperatura</InfoText>
				<InfoText>{temperature}ºC</InfoText>
			</InfoContainer>
			<InfoContainer>
				<InfoIcon src={humidityIcon} />
				<InfoText>Umidade</InfoText>
				<InfoText>{humidity}%</InfoText>
			</InfoContainer>
			<InfoContainer>
				<InfoIcon src={rainIcon} />
				<InfoText>Precipitação</InfoText>
				<InfoText>{rain}mm</InfoText>
			</InfoContainer>
			<InfoContainer>
				<InfoIcon src={windIcon} />
				<InfoText>Vel. Vento</InfoText>
				<InfoText>{wind_speed}Km/h</InfoText>
			</InfoContainer>
		</StyledTodayInfo>
	);
}
