import styled from "styled-components";

export const Container = styled.button`
  height: 50px;

  font-weight: 500;
  border-radius: 8px;
  padding: 0 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${props => props.theme.colors.primary};
  color: #fff;

  border: 0;

  > img {
    margin-right: 8px;
  }

  transition: filter 0.2s;

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &.outlined {
    background: ${props => props.theme.colors.backgroundRoomCode};
    border: 1px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
  }
`;
