import React, { createContext, useCallback, useState, useContext } from 'react';

interface LoadingContextProps {
	isLoading: boolean;
	setLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextProps>({} as LoadingContextProps);

export const LoadingProvider: React.FC = ({ children }) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const setLoading = useCallback((loading: boolean) => {
		setIsLoading(loading);
	}, []);

	return <LoadingContext.Provider value={{ isLoading, setLoading }}>{children}</LoadingContext.Provider>;
};

export function useLoading(): LoadingContextProps {
	const context = useContext(LoadingContext);

	if (!context) {
		throw new Error('useLoading must be used within an LoadingProvider');
	}

	return context;
}
