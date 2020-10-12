/* eslint-disable react/no-unescaped-entities */
import React, { useMemo } from 'react';
import { useWeather } from '../../hooks/WeatherHook';
import { useLoading } from '../../hooks/LoadingHook';
import formatDate from '../../utils/functions/formatDate';

import PercentBar from '../PercentBar';
import WindDirection from '../WindDirection';

import {
	Container,
	ContentContainer,
	TempSelectorContainer,
	TempButton,
	WeekContainer,
	DayCard,
	CardTitle,
	TemperaturesContainer,
	MaxTemp,
	MinTemp,
	TodaysHighlightsContainer,
	HighlightsGrid,
	HighlightContainer,
	Names,
	WeatherImage,
} from './styles';

import { getIcon } from '../../utils/functions/weatherIcon';
import { OverviewOnLoad } from '../Loading';

const Overview: React.FC = () => {
	const { climate, tempUnit, changeTempUnit } = useWeather();
	const { isLoading } = useLoading();

	const today = useMemo(() => {
		return climate?.consolidated_weather[0];
	}, [climate]);

	if (isLoading) {
		return <OverviewOnLoad />;
	}

	return (
		<Container>
			<ContentContainer>
				<TempSelectorContainer>
					<TempButton
						type='button'
						selected={tempUnit === 'celcius'}
						disabled={tempUnit === 'celcius'}
						onClick={() => {
							changeTempUnit('celcius');
						}}
					>
						°C
					</TempButton>
					<TempButton
						type='button'
						selected={tempUnit === 'fahrenheit'}
						disabled={tempUnit === 'fahrenheit'}
						onClick={() => {
							changeTempUnit('fahrenheit');
						}}
					>
						°F
					</TempButton>
				</TempSelectorContainer>
				<WeekContainer>
					{climate?.consolidated_weather.map((day) => (
						<DayCard key={day.id}>
							<CardTitle>{formatDate(day.applicable_date)}</CardTitle>
							<WeatherImage src={getIcon(day.weather_state_abbr) || ''} />
							{tempUnit === 'celcius' && (
								<TemperaturesContainer>
									<MaxTemp>{day.max_temp.toFixed(0)} ⁰C</MaxTemp>
									<MinTemp>{day.min_temp.toFixed(0)} ⁰C</MinTemp>
								</TemperaturesContainer>
							)}
							{tempUnit === 'fahrenheit' && (
								<TemperaturesContainer>
									<MaxTemp>{day.max_temp_fahrenheit?.toFixed(0)} ⁰F</MaxTemp>
									<MinTemp>{day.min_temp_fahrenheit?.toFixed(0)} ⁰F</MinTemp>
								</TemperaturesContainer>
							)}
						</DayCard>
					))}
				</WeekContainer>
				<TodaysHighlightsContainer>
					<h2>Today's Highlights</h2>
					<HighlightsGrid>
						<HighlightContainer>
							<h3>Wind status</h3>
							<p>
								<span className='number'>{today?.wind_speed.toFixed(0)}</span>
								<span className='unit'>mph</span>
							</p>
							<WindDirection deg={today?.wind_direction} compass={today?.wind_direction_compass} />
						</HighlightContainer>
						<HighlightContainer>
							<h3>Humidity</h3>
							<p>
								<span className='number'>{today?.humidity}</span>
								<span className='unit'>%</span>
							</p>
							<PercentBar style={{ width: '70%', marginTop: 28 }} progress={today?.humidity} />
						</HighlightContainer>
						<HighlightContainer>
							<h3>Visibility</h3>
							<p>
								<span className='number'>{today?.visibility.toFixed(0)}</span>
								<span className='unit'>miles</span>
							</p>
						</HighlightContainer>
						<HighlightContainer>
							<h3>Air Pressure</h3>
							<p>
								<span className='number'>{today?.air_pressure}</span>
								<span className='unit'>mb</span>
							</p>
						</HighlightContainer>
					</HighlightsGrid>
				</TodaysHighlightsContainer>
			</ContentContainer>
			<Names>Gabriel Fiali, Lucas Gobatto, Rodrigo Mayer @ DevChallenges.io</Names>
		</Container>
	);
};

export default Overview;
