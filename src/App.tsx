import GlobalStyle from "./assets/styles/GlobalStyle";
import Container from "./components/Container/Container";
import WeatherProvider, { WeatherContext } from "./contexts/WeatherContext";

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
