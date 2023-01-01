import "../../assets/styles/fonts.css";
import GlobalStyle from "../../assets/styles/GlobalStyle";
import Container from "../Container/Container";

import bg1 from "../../assets/bg_images/field-sun.jpg";
import cloud1 from "../../assets/bg_images/cloud1.jpg";
import cloud2 from "../../assets/bg_images/cloud2.jpg";
import cloud3 from "../../assets/bg_images/cloud3.jpg";
import rain1 from "../../assets/bg_images/rain1.jpg";
import rain2 from "../../assets/bg_images/rain2.jpg";
import rain3 from "../../assets/bg_images/rain3.jpg";
import rain4 from "../../assets/bg_images/rain4.jpg";

import WeatherProvider, { WeatherContext } from "../../contexts/WeatherContext";
import { StyledApp } from "./style";
import Title from "../Title/Title";
import { BG_MAP } from "../../constants/bgImageMap";
import { useContext } from "react";

function App() {
	const weather = useContext(WeatherContext);

	return (
		<>
			<GlobalStyle />
			<StyledApp
				bgImage={BG_MAP.get(weather?.current_weather.weathercode)}
			>
				<Title />

				<Container />
			</StyledApp>
		</>
	);
}

export default App;
