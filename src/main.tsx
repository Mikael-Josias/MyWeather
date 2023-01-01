import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import WeatherProvider from "./contexts/WeatherContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<WeatherProvider>
			<App />
		</WeatherProvider>
	</React.StrictMode>
);
