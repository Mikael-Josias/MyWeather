import styled from "styled-components";

export const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 960px;

	& > div {
		display: flex;
		justify-content: center;
		margin-bottom: 30px;
	}
`;

export const WeekdayList = styled.ul`
	display: flex;
	overflow: scroll;
	margin-bottom: 60px;
	width: 100%;
`;
