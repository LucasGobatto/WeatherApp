import React from 'react';
import { InitalHomePage } from '../components/Loading';
import { useWeather } from '../hooks/WeatherHook';
import { useLoading } from '../hooks/LoadingHook';
import { requestByLattAndLong } from '../services/api.requests';
import { Container } from './styles';
import { ClimateDetails } from '../services/services.interface';
import { climateDetailsToken } from '../store';

const Home: React.FC = ({ children }) => {
	const { climate, getClimate, setClimate } = useWeather();
	const { setLoading } = useLoading();

	React.useEffect(() => {
		const exec = async (): Promise<void> => {
			setLoading(true);
			const nearstCities = await requestByLattAndLong();
			if (nearstCities.length > 0) {
				getClimate(nearstCities[0].woeid);
			}
			setLoading(false);
		};

		const getStorageItem = (): ClimateDetails | void => {
			const climateDetails = localStorage.getItem(climateDetailsToken);
			if (climateDetails) {
				setClimate(JSON.parse(climateDetails));
			} else {
				exec();
			}
		};
		getStorageItem();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	React.useEffect(() => {
		const storageDataFunction = (): void => {
			if (climate) {
				localStorage.setItem(climateDetailsToken, JSON.stringify(climate));
			}
		};
		storageDataFunction();
	}, [climate]);

	if (!climate) {
		return (
			<Container>
				<InitalHomePage />
			</Container>
		);
	}

	return <Container>{children}</Container>;
};

export default Home;
