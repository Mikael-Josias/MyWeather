import "../../assets/styles/fonts.css";
import GlobalStyle from "../../assets/styles/GlobalStyle";
import Container from "../Container/Container";

import WeatherProvider from "../../contexts/WeatherContext";
import { StyledApp } from "./style";
import Title from "../Title/Title";

function App() {
	return (
		<WeatherProvider>
			<GlobalStyle />
			<StyledApp>
				<Title />

				<Container />
			</StyledApp>
		</WeatherProvider>
	);
}

export default App;
