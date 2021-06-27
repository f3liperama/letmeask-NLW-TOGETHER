import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.colors.backgroundQuestion};
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 24px;

  & + & {
    margin-top: 8px;
  }

  &.highlighted {
    background: ${(props) => props.theme.colors.questionHighlighted};
    border: 1px solid ${(props) => props.theme.colors.primary};

    footer div span {
      color: ${(props) => props.theme.colors.textPrimary};
    }
  }

  &.answered {
    background: ${(props) => props.theme.colors.questionAnswered};
  }

  p {
    color: ${(props) => props.theme.colors.textPrimary};
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;

    > div {
      display: flex;
      gap: 16px;
    }

    button {
      border: 0;
      background: none;
      transition: filter 0.2s;

      &.like-button {
        display: flex;
        align-items: flex-end;
        color: ${(props) => props.theme.colors.textSecondary};

        gap: 8px;

        &.liked {
          color: ${(props) => props.theme.colors.primary};

          svg path {
            stroke: ${(props) => props.theme.colors.primary};
          }
        }
      }

      &:hover {
        filter: brightness(
          ${(props) => (props.theme.title === "light" ? 0.7 : 0.8)}
        );
      }
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
    color: ${(props) => props.theme.colors.textSecondary};
    font-size: 14px;
  }
`;
