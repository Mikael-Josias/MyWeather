import "./assets/styles/fonts.css";
import GlobalStyle from "./assets/styles/GlobalStyle";
import Card from "./components/Card/Card";
import Container from "./components/Container/Container";

import WeatherProvider from "./contexts/WeatherContext";

function App() {
	return (
		<WeatherProvider>
			<GlobalStyle />
			<div className="App">
				<Container />
			</div>
		</WeatherProvider>
	);
}

export default App;
