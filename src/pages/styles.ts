import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex: 1;

	@media only screen and (max-width: 825px) {
		flex-direction: column;
	}
`;
