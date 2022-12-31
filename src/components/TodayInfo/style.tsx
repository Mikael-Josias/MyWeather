import styled from "styled-components";

export const StyledTodayInfo = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	background-color: white;
	border: 5px solid black;
	border-left: none;
	padding: 30px;
	height: auto;
	width: 550px;
	box-shadow: 6px 6px 0 #002648;
`;

export const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 50%;
	width: 50%;
`;

export const InfoIcon = styled.img`
	height: 60px;
	width: 60px;
	margin-bottom: 5px;
`;

export const InfoText = styled.span`
	font-size: 20px;
	font-weight: 700;
	color: #3c3c3c;

	&:not(:last-child) {
		margin-bottom: 5px;
	}
`;
