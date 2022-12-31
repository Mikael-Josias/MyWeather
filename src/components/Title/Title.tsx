import { StyledHeader, StyledImage, StyledTitle } from "./style";
import sun from "../../assets/weather_icons/sun.png";
import cloud from "../../assets/weather_icons/cloud.png";

export default function Title() {
	return (
		<StyledHeader>
			<StyledImage src={sun} type="sun" />
			<StyledTitle>My Weather</StyledTitle>
			<StyledImage src={cloud} type="clound" />
		</StyledHeader>
	);
}
