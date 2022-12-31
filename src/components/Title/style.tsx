import styled from "styled-components";

interface Props {
	type: string;
}

export const StyledHeader = styled.header`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: auto;
	height: 150px;
	width: 900px;
`;

export const StyledTitle = styled.h1`
	font-size: 80px;
	font-weight: 700;
	color: #0db6d9;
	-webkit-text-stroke: 5px #000f1d;
	z-index: 1;
`;

export const StyledImage = styled.img<Props>`
	position: absolute;
	top: ${(props) => (props.type === "sun" ? "10px" : "75px")};
	left: ${(props) => (props.type === "sun" ? "20%" : "75%")};
	height: 75px;
	width: 75px;
`;
