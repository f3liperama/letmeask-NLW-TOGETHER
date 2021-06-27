import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  header {
    padding: 24px;
    border-bottom: 1px solid ${(props) => props.theme.colors.headerSeparator};
  }

  background: ${(props) => props.theme.colors.background};
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    max-height: 45px;
  }

  > div {
    display: flex;

    gap: 16px;

    > button {
      height: 40px;
    }
  }
  
`;

export const Utils = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentMain = styled.div`
  max-width: 800px;
  margin: 0 auto;

  form {
    textarea {
      width: 100%;
      border: 0;
	  border-radius: 8px;
      padding: 16px;
	  background: ${(props) => props.theme.colors.backgroundTextArea};
	  color: ${(props) => props.theme.colors.textPrimary};

      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
      resize: vertical;
      min-height: 130px;
    }
  }
`;

export const RoomTitle = styled.div`
  margin: 32px 0 24px;
  display: flex;
  align-items: center;

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    color: ${(props) => props.theme.colors.textPrimary};;
  }

  span {
    margin-left: 16px;
	background: ${(props) => props.theme.colors.secondary};
    border-radius: 9999px;
    padding: 8px 16px;
    font-weight: 500;
    font-size: 14px;
    color: #fff;
  }
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;

  > span {
    font-size: 14px;
    color: ${(props) => props.theme.colors.textSecondary};
    font-weight: 500;

    > button {
      background: none;
      border: none;
      color: ${(props) => props.theme.colors.primary};
      text-decoration: underline;
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  > span {
    margin-left: 8px;
    color: ${(props) => props.theme.colors.textPrimary};
    font-weight: 500;
    font-size: 14px;
  }
`;

export const QuestionList = styled.div`
  margin-top: 32px;
`;
