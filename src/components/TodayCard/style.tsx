import styled from "styled-components";

export const StyledTodayCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	background-color: white;
	border: 5px solid black;
	padding: 30px 30px 60px 30px;
	height: auto;
	width: 250px;
	box-shadow: 6px 6px 0 #002648;
`;

export const TodayWeekName = styled.h2`
	font-size: 25px;
	font-weight: 700;
	margin-bottom: 10px;
`;

export const TodayWeatherIcon = styled.img`
	height: 150px;
	width: 150px;
`;
