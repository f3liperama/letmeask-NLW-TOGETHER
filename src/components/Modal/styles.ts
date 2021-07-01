import styled from "styled-components";

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0;
  visibility: hidden;

  &.active {
    opacity: 1;
    visibility: visible;
    z-index: 999;
  }
`;

export const ModalContainer = styled.div`
  min-width: min(600px, 90%);
  min-height: min(360px, 90%);

  padding: 16px;

  border-radius: 8px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  background: ${(props) => props.theme.colors.backgroundModal};
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    margin-top: 40px;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > span {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 24px;
    margin: 24px 0 16px 0;
    color: ${(props) => props.theme.colors.textPrimary};
  }

  > p {
    font-weight: 400;
    font-size: 16px;
    color: ${(props) => props.theme.colors.textSecondary};
  }

  > div {
    display: flex;
    flex-direction: row;

    gap: 8px;

    margin-top: 40px;

    > button {
      height: 50px;
      width: 160px;

      border-radius: 8px;
      border: none;

      font-weight: 400;
      font-size: 16px;

	  font-weight: bold;

      color: ${(props) => props.theme.colors.textSecondary};
	  background: ${(props) => props.theme.colors.backgroundCancel};

      &.submit {
        background: ${(props) => props.theme.colors.backgroundSubmit};
        color: #fff;
      }
    }
  }
`;
