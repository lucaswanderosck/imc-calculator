import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  place-content: center;
  z-index: 1;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.8);

  > div {
    position: relative;
    background-color: ${({ theme }) => theme.colors.white};
    margin: auto;
    padding: 48px 16px;
    text-align: center;
    border-radius: 6px;
    width: 428px;
    -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.4s;
    animation-name: animatetop;
    animation-duration: 0.4s;

    > h2 {
      color: ${({ theme }) => theme.colors.blue_2};
      font-size: 32px;
      font-weight: bold;
    }

    > svg {
      position: absolute;
      top: 0;
      right: 0;
      padding: 4px 12px;
      font-weight: bold;
      font-size: 46px;
      color: ${({ theme }) => theme.colors.blue_2};
      cursor: pointer;
    }
  }

  @-webkit-keyframes animatetop {
    from {
      top: -300px;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }

  @keyframes animatetop {
    from {
      top: -300px;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }
`;
