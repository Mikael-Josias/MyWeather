import sun1 from "../assets/bg_images/sun1.jpg";
import sun2 from "../assets/bg_images/sun2.jpg";
import sun3 from "../assets/bg_images/sun3.jpg";
import cloud1 from "../assets/bg_images/cloud1.jpg";
import rain1 from "../assets/bg_images/rain1.jpg";
import rain2 from "../assets/bg_images/rain2.jpg";
import rain3 from "../assets/bg_images/rain3.jpg";
import rain4 from "../assets/bg_images/rain4.jpg";

export const BG_MAP = new Map();

addImage([0], sun1);
addImage([1], sun2);
addImage([2], sun3);
addImage([3], cloud1);

addImage([51, 53, 55], rain1);
addImage([61, 63, 65, 66, 67], rain2);
addImage([80, 81, 82], rain3);
addImage([95, 96, 99], rain4);

function addImage(values: number[], image: string) {
	values.forEach((v) => {
		BG_MAP.set(v, image);
	});
}
