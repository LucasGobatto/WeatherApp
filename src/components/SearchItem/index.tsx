import React from 'react';
import { AiOutlineRight } from 'react-icons/ai/index';
import * as Styles from './styles';

import { useWeather } from '../../hooks/WeatherHook/index';

interface SearchItemProps {
	results: Record<any, any>[];
	updateState(status: boolean): void;
}

const SearchItem: React.FC<SearchItemProps> = ({ results, updateState }) => {
	const { getClimate } = useWeather();

	function handleUpdate(woeId: number): void {
		getClimate(woeId);
		updateState(false);
	}

	return (
		<Styles.ResultsContainer>
			{results.map((item: Record<any, any>) => (
				<Styles.Result key={item.title} onClick={() => handleUpdate(item.woeid)}>
					<h1>{item.title}</h1>
					<AiOutlineRight />
				</Styles.Result>
			))}
		</Styles.ResultsContainer>
	);
};

export default SearchItem;
