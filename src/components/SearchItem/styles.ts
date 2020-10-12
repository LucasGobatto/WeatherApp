import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const ResultsContainer = styled(Container)`
	flex-direction: column;
	justify-content: flex-start;
	overflow-y: auto;

	@media only screen and (max-width: 825px) {
		width: 500px;
	}
`;

export const Result = styled.button`
	color: #616475;
	width: 100%;
	display: flex;
	background: none;
	justify-content: space-between;
	align-items: center;
	padding: 20px 10px;
	box-sizing: border-box;
	border: 1px solid #1e213a;
	margin-bottom: 24px;
	&:hover {
		border: 1px solid #616475;
		svg {
			visibility: initial;
		}
	}
	h1 {
		font-size: 16px;
	}
	svg {
		visibility: hidden;
	}
`;
