import styled from "styled-components";

interface Props {
	dayName: boolean;
}

export const WeekdayCard = styled.div`
	display: flex;
	flex-shrink: 0;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	background-color: white;
	border: 5px solid black;
	border-radius: 5px;
	margin: 0 15px;
	padding: 15px;
	height: 230px;
	width: 190px;
`;

export const DayWeather = styled.img`
	height: 75px;
	width: 75px;
`;

export const DaySpan = styled.span<Props>`
	font-size: ${(props) => (props.dayName ? "32px" : "36px")};
	font-weight: ${(props) => (props.dayName ? "400" : "700")};
`;
