import styled from 'styled-components';

export const SidebarSearch = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	color: #fff;
	background-color: #222642;
	width: 459px;
	height: 100vh;
	padding: 20px 40px;
	display: flex;
	flex-direction: column;

	h1 {
		color: #a09fb1;
	}

	@media only screen and (max-width: 825px) {
		width: 100%;
		align-items: center;
	}
`;

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media only screen and (max-width: 825px) {
		width: 500px;
	}
`;

export const ExitContainer = styled(Container)`
	justify-content: flex-end;
	margin-bottom: 24px;
	MdClear {
		fill: black;
	}
`;

export const SearchContainer = styled(Container)`
	margin-bottom: 48px;
`;

export const ExitButton = styled.button`
	width: 10%;
	color: #e7e7eb;
	border: 0;
	background: none;
	outline: 0;
`;

export const Searchbar = styled.div`
	color: #e7e7eb;
	width: 70%;
	display: flex;
	align-items: center;
	justify-content: left;
	border: 1px solid #e7e7eb;
	padding: 0 10px;
	box-sizing: border-box;

	img {
		width: 17px;
	}

	input {
		width: 80%;
		color: #e7e7eb;
		padding: 10px;
		background: none;
		border: none;
		outline: 0;
	}

	@media only screen and (max-width: 825px) {
		width: 80%;
	}
`;

export const SearchButton = styled.button`
	color: #e7e7eb;
	height: 100%;
	padding: 11px;
	border: none;
	outline: 0;
	background-color: #3c47e9;
`;
