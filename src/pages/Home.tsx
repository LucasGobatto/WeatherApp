import React from 'react';
import { InitalHomePage } from '../components/Loading';
import { useWeather } from '../hooks/WeatherHook';
import { Container } from './styles';

const Home: React.FC = ({ children }) => {
	const { climate } = useWeather();

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
