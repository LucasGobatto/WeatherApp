import styled from 'styled-components';

export const Sidebar = styled.div`
	color: #fff;
	background-color: #1e213a;
	width: 459px;
	min-height: 100vh;
	padding: 40px;
	display: flex;
	flex-direction: column;

	h1 {
		color: #a09fb1;
	}

	@media only screen and (max-width: 825px) {
		width: 100%;
		align-items: center;
		height: 810px;
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
`;

export const Button = styled.button`
	color: #fff;
	background-color: #6e707a;
	border-radius: 3px;
	padding: 8px 10px;
	border: none;
	outline: 0;
`;

// export const GpsButton = styled(Button)`
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	border-radius: 50%;
// 	padding: 10px;
// `;

export const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	justify-content: space-between;

	h1 {
		font-size: 36px;
		margin: 32px 0;
	}
`;

export const BackgroundImage = styled.img`
	position: absolute;
	z-index: -1;
	top: 100px;
	width: 55%;
	margin: 120px 0 48px 0;
	user-drag: none;
	user-select: none;
	-moz-user-select: none;
	-webkit-user-drag: none;
	-webkit-user-select: none;
	-ms-user-select: none;
`;

export const StatusImage = styled.img`
	width: 55%;
	margin: 120px 0 48px 0;
	user-drag: none;
	user-select: none;
	-moz-user-select: none;
	-webkit-user-drag: none;
	-webkit-user-select: none;
	-ms-user-select: none;
`;

export const TempContainer = styled.div`
	font-size: 144px;
	margin: 48px 0;
	display: flex;
	align-items: flex-end;

	b {
		font-size: 64px;
		color: #e7e7eb;
	}
`;

export const DateContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	margin: 16px 0;
	width: 60%;
	color: #88869d;

	h2 {
		font-size: 18px;
	}
`;
