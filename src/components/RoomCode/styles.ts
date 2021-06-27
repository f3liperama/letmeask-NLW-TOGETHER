import styled from "styled-components";

export const Container = styled.div`
	height: 40px;
	border-radius: 8px;
	overflow: hidden;

	background: ${props => props.theme.colors.backgroundRoomCode};
	color: ${props => props.theme.colors.textPrimary};
	border: 1px solid ${props => props.theme.colors.primary};

	display: flex;

	div {
		background: ${props => props.theme.colors.primary};
		padding: 0 12px;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	span {
		align-self: center;
		display: block;

		padding: 0 16px 0 12px;
		width: 230px;
		font-size: 14px;
		font-weight: 500;
	}
`;