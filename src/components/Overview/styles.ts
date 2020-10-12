import styled from 'styled-components';

interface TempButtonProps {
	selected?: boolean;
}

export const Container = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	background: #100e1d;
	padding: 16px;
	position: relative;

	@media only screen and (max-width: 768px) {
		width: 100%;
		height: 810px;
	}
`;

export const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 86px;
`;

export const TempSelectorContainer = styled.div`
	display: flex;
	margin-top: 16px;

	@media only screen and (min-width: 768px) {
		align-self: flex-end;
	}
`;

export const TempButton = styled.button<TempButtonProps>`
	background: ${(props) => (props.selected ? '#E7E7EB' : '#585676')};
	color: ${(props) => (props.selected ? '#110E3C' : '#E7E7EB')};
	width: 40px;
	height: 40px;
	font-weight: bold;
	border: none;
	border-radius: 20px;
	margin-left: 12px;
`;

export const WeekContainer = styled.div`
	width: 100%;
	display: grid;
	grid-column-gap: 26px;
	grid-row-gap: 32px;
	grid-template-columns: repeat(2, 1fr);
	justify-content: center;
	margin-top: 36px;

	@media only screen and (min-width: 976px) {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		justify-content: center;
	}

	@media only screen and (min-width: 1460px) {
		display: flex;
	}
`;

export const DayCard = styled.div`
	width: 140px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #1e213a;
	padding: 18px;
	margin: auto;
`;

export const CardTitle = styled.span`
	font-size: 16px;
`;

export const WeatherImage = styled.img`
	margin-top: 10px;
	width: 56px;
	height: 56px;
	object-fit: contain;
`;

export const TemperaturesContainer = styled.div`
	margin-top: 30px;
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

export const MaxTemp = styled.span`
	color: #e7e7eb;
`;

export const MinTemp = styled.span`
	color: #a09fb1;
`;

export const TodaysHighlightsContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 52px;
`;

export const HighlightsGrid = styled.div`
	width: 100%;

	h2 {
		font-size: 24px;
		font-weight: bold;
	}

	@media only screen and (min-width: 1196px) {
		display: grid;
		grid-column-gap: 48px;
		grid-row-gap: 0px;
		grid-template-columns: auto auto;
		justify-content: center;
	}
`;

export const HighlightContainer = styled.div`
	background-color: #1e213a;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 32px;
	padding: 36px 0;
	width: 328px;

	h3 {
		font-size: 16px;
		color: #e7e7eb;
	}

	p .number {
		font-size: 64px;
		font-weight: bold;
		color: #e7e7eb;
	}

	p .unit {
		margin-left: 8px;
		font-size: 32px;
		color: #e7e7eb;
	}
`;

export const Names = styled.p`
	position: absolute;
	bottom: 0;
	text-align: center;
	margin: 32px;
	color: #616475;
`;
