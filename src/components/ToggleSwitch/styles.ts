import styled from "styled-components";

export const Toggle = styled.div`
  display: flex;
  align-items: center;
  width: 50px;
  height: 20px;
  border-radius: 30px;
  cursor: pointer;

  &.off {
    background: #dbdcdd;
    > div {
      left: 0;
    }
  }

  &.on {
    background: #333;
    > div {
      left: 26px;
    }
  }
`;

export const ToggleCircle = styled.div`
  display: flex;
  position: relative;
  background: #835afd;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  transition: all 0.25s ease;
  border: 0;
`;
