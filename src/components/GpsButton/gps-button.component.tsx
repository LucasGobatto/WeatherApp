import React from 'react';
import { requestByLattAndLong } from '../../services/api.requests';
import { GpsButtonStyled } from './gps-button.component.styled';
import { GpsIcon } from '../../assets/icons/GpsIcon';
import { useLoading } from '../../hooks/LoadingHook';

interface GpsButtonProps {
	onTap(woeid: number): void;
}

export const GpsButton: React.FC<GpsButtonProps> = (props) => {
	const { setLoading } = useLoading();

	const handleRequest = async (): Promise<void> => {
		setLoading(true);
		const nearstCities = await requestByLattAndLong();
		if (nearstCities.length > 0) {
			props.onTap(nearstCities[0].woeid);
		}
		setLoading(false);
	};

	return (
		<GpsButtonStyled onClick={handleRequest}>
			<GpsIcon />
		</GpsButtonStyled>
	);
};
