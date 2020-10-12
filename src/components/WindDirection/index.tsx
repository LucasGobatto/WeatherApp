import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';

import { Container, Degree, Compass } from './styles';

interface WindDirectionProps extends React.HTMLAttributes<HTMLDivElement> {
	deg?: number;
	compass?: string;
}

const WindDirection: React.FC<WindDirectionProps> = ({ deg, compass }) => {
	if (!deg || !compass) {
		return null;
	}

	return (
		<Container>
			<Degree deg={deg}>
				<FaLocationArrow size={12} color='#E7E7EB' />
			</Degree>
			<Compass>{compass}</Compass>
		</Container>
	);
};

export default WindDirection;
