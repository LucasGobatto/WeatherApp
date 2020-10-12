import Icons from '../../assets/images';

interface IconList {
	[key: string]: string;
}

const iconList: IconList = {
	c: Icons.Clear,
	hc: Icons.HeavyCloud,
	sn: Icons.Snow,
	sl: Icons.Sleet,
	h: Icons.Hail,
	t: Icons.Thunderstorm,
	hr: Icons.HeavyRain,
	lr: Icons.LightRain,
	s: Icons.Shower,
	lc: Icons.LightCloud,
	cb: Icons.CloudBackground,
};

export const getIcon = (weatherStateAbbr: string): string | void => {
	return iconList[weatherStateAbbr];
};
