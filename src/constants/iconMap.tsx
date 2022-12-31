import sun from "../assets/weather_icons/sun.png";
import cloud from "../assets/weather_icons/cloud.png";
import rain from "../assets/weather_icons/raining.png";
import thunder from "../assets/weather_icons/thunder.png";

export const ICON_MAP = new Map();

addIcon([0, 1], sun);
addIcon([2, 3], cloud);
addIcon([51, 53, 55, 61, 63, 65, 66, 67, 80, 81, 82], rain);
addIcon([95, 96, 99], thunder);

function addIcon(values: number[], icon: string) {
	values.forEach((v) => {
		ICON_MAP.set(v, icon);
	});
}
