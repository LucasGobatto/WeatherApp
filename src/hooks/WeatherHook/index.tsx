import React, { createContext, useCallback, useState, useContext } from 'react';
import { climateCityDetails } from '../../services/api.requests';
import { ClimateDetails } from '../../services/services.interface';
import toFahrenheit from '../../utils/functions/toFahrenheit';
import { tempUnitToken } from '../../store';

interface WeatherContextData {
	climate: ClimateDetails | null;
	tempUnit: 'celcius' | 'fahrenheit';
	getClimate(woeid: number): void;
	changeTempUnit(unit: WeatherContextData['tempUnit']): void;
	setClimate: React.Dispatch<React.SetStateAction<ClimateDetails | null>>;
}

const WeatherContext = createContext<WeatherContextData>({} as WeatherContextData);

export const WeatherProvider: React.FC = ({ children }) => {
	const [climate, setClimate] = useState<ClimateDetails | null>(null);
	const [tempUnit, setTempUnit] = useState<WeatherContextData['tempUnit']>(() => {
		const savedUnit = localStorage.getItem(tempUnitToken) as WeatherContextData['tempUnit'];

		if (savedUnit) {
			return savedUnit;
		}

		return 'celcius';
	});

	const addFahrenheitTemps = useCallback((data: ClimateDetails): ClimateDetails => {
		const tempData = { ...data };

		tempData.consolidated_weather = data.consolidated_weather.map((day) => {
			const tempDay = { ...day };

			tempDay.min_temp_fahrenheit = toFahrenheit(tempDay.min_temp);
			tempDay.max_temp_fahrenheit = toFahrenheit(tempDay.max_temp);
			tempDay.the_temp_fahrenheit = toFahrenheit(tempDay.the_temp);

			return tempDay;
		});

		return tempData;
	}, []);

	const changeTempUnit = useCallback((unit: WeatherContextData['tempUnit']) => {
		// TODO: Save selected temp unit to localStorage

		localStorage.setItem(tempUnitToken, unit);

		setTempUnit(unit);
	}, []);

	const getClimate = useCallback(
		async (woeid: number) => {
			const result = await climateCityDetails(woeid);
			console.log('The requistion is done! The result is:', result);
			setClimate(addFahrenheitTemps(result));
		},
		[addFahrenheitTemps],
	);

	return (
		<WeatherContext.Provider value={{ climate, tempUnit, getClimate, setClimate, changeTempUnit }}>
			{children}
		</WeatherContext.Provider>
	);
};

export function useWeather(): WeatherContextData {
	const context = useContext(WeatherContext);

	if (!context) {
		throw new Error('useWeather must be used within an WeatherProvider');
	}

	return context;
}
