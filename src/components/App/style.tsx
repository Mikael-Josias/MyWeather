import styled from "styled-components";

interface Props {
	bgImage: string;
}

export const StyledApp = styled.div<Props>`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	background-image: url(${(props) => props.bgImage});
	background-repeat: no-repeat;
	background-size: cover;
	min-height: 100vh;
`;
