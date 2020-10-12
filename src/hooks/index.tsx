import React from 'react';

import { WeatherProvider } from './WeatherHook';
import { LoadingProvider } from './LoadingHook';

const AppProvider: React.FC = ({ children }) => {
	return (
		<LoadingProvider>
			<WeatherProvider>{children}</WeatherProvider>
		</LoadingProvider>
	);
};

export default AppProvider;
