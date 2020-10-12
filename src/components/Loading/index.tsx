import React, { useState } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { InitialSidebar, Label, Magnify, VSeparator, Container, Map } from './styled';
import { ButtonContainer, Button } from '../Sidebar/styles';
import { GpsButton } from '../GpsButton';
import { useWeather } from '../../hooks/WeatherHook';
import { useLoading } from '../../hooks/LoadingHook';
import { Names } from '../Overview/styles';
import SidebarSearch from '../SidebarSearch';

export const OverviewOnLoad: React.FC = () => {
	return (
		<Container>
			<img
				alt='loading'
				src='https://68.media.tumblr.com/348df0120e07cd7f14d5a394f86400de/tumblr_ootetnYTap1uoh1aio4_400.gif'
				style={{ height: '69px', width: '69px', margin: '24px' }} // nice
			/>
			<Label>Loading...</Label>
			<Names>Gabriel Fiali, Lucas Gobatto, Rodrigo Mayer @ DevChallenges.io</Names>
		</Container>
	);
};

const OverviewNotOnLoad: React.FC = () => {
	return (
		<Container>
			<Map size='200px' />
			<VSeparator />
			<Label>Tell me what you want here on the side! :)</Label>
			<Names>Gabriel Fiali, Lucas Gobatto, Rodrigo Mayer @ DevChallenges.io</Names>
		</Container>
	);
};

export const InitalHomePage: React.FC = () => {
	const { getClimate } = useWeather();
	const { isLoading } = useLoading();
	const [status, setStatus] = useState(false);

	return (
		<>
			<InitialSidebar>
				<ReactCSSTransitionGroup
					component={React.Fragment}
					transitionName='slider'
					transitionEnterTimeout={1000}
					transitionLeaveTimeout={1000}
				>
					{status && <SidebarSearch updateState={setStatus} />}
				</ReactCSSTransitionGroup>
				<ButtonContainer>
					<Button onClick={() => setStatus(true)}>Search for places</Button>
					<GpsButton onTap={getClimate} />
				</ButtonContainer>
				<VSeparator />
				<Magnify size='300px' />
				<VSeparator />
				<Label>
					Nothing to show... Search for a place or allow us access to your location to see details about the weather for
					the next 5 days.
				</Label>
			</InitialSidebar>
			{isLoading ? <OverviewOnLoad /> : <OverviewNotOnLoad />}
		</>
	);
};
