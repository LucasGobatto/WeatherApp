import styled from 'styled-components';
import { GiMagnifyingGlass } from 'react-icons/gi';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { Sidebar } from '../Sidebar/styles';

export { Container } from '../Overview/styles';

export const InitialSidebar = styled(Sidebar)`
	align-items: center;
	@media only screen and (max-width: 825px) {
		width: 100%;
	}
`;

export const Magnify = styled(GiMagnifyingGlass)`
	color: #a09fb1;
`;

export const Map = styled(FaMapMarkedAlt)`
	color: #a09fb1;
`;

export const Label = styled.p`
	color: #a09fb1;
	font-size: 24px;
`;

export const VSeparator = styled.div`
	height: 10vh;
`;
