import React from 'react';
import { InitalHomePage } from '../components/Loading';
import { useWeather } from '../hooks/WeatherHook';
import { useLoading } from '../hooks/LoadingHook';
import { requestByLattAndLong } from '../services/api.requests';
import { Container } from './styles';

const Home: React.FC = ({ children }) => {
	const { climate, getClimate } = useWeather();
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

		exec();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
