import Container from "./components/Container/Container";
import WeatherProvider, { WeatherContext } from "./contexts/WeatherContext";

function App() {
	return (
		<WeatherProvider>
			<div className="App">
				<Container />
			</div>
		</WeatherProvider>
	);
}

export default App;
