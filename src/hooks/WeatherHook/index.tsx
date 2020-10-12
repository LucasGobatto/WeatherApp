import React, { createContext, useCallback, useState, useContext, useEffect } from 'react';
import { climateCityDetails } from '../../services/api.requests';
import { ClimateDetails } from '../../services/services.interface';
import toFahrenheit from '../../utils/functions/toFahrenheit';
import { tempUnitToken, climateDetailsToken } from '../../store';
import { requestByLattAndLong } from '../../services/api.requests';
import { useLoading } from '../LoadingHook';

interface WeatherContextData {
	climate: ClimateDetails | null;
	tempUnit: 'celcius' | 'fahrenheit';
	getClimate(woeid: number): void;
	changeTempUnit(unit: WeatherContextData['tempUnit']): void;
}

export interface StorageResult {
	expiration: number;
	data: ClimateDetails;
}

const WeatherContext = createContext<WeatherContextData>({} as WeatherContextData);

export const WeatherProvider: React.FC = ({ children }) => {
	const { setLoading } = useLoading();
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
		localStorage.setItem(tempUnitToken, unit);

		setTempUnit(unit);
	}, []);

	const storageDataFunction = (result: ClimateDetails): void => {
		const data: StorageResult = {
			expiration: Date.now() + 3600,
			data: result,
		};
		localStorage.setItem(climateDetailsToken, JSON.stringify(data));
	};

	const getClimate = useCallback(
		async (woeid: number) => {
			const result = await climateCityDetails(woeid);
			storageDataFunction(addFahrenheitTemps(result));
			setClimate(addFahrenheitTemps(result));
		},
		[addFahrenheitTemps],
	);

	useEffect(() => {
		const getStorageItem = async (): Promise<ClimateDetails | void> => {
			setLoading(true);
			const result = localStorage.getItem(climateDetailsToken);
			const now = Date.now();
			if (result && now < new Date(JSON.parse(result).expiration).getTime()) {
				setClimate(JSON.parse(result).data);
			} else {
				const nearstCities = await requestByLattAndLong();
				if (nearstCities.length > 0) {
					getClimate(nearstCities[0].woeid);
				}
			}
			setLoading(false);
		};
		getStorageItem();
	}, [getClimate, setLoading]);

	return (
		<WeatherContext.Provider value={{ climate, tempUnit, getClimate, changeTempUnit }}>
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
