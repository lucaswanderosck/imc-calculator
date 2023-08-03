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
  background-color: rgba(0, 0, 0, 0.9);

  > div {
    background-color: ${({ theme }) => theme.colors.white};
    position: relative;
    margin: auto;
    padding: 16px;
    text-align: center;
    border-radius: 6px;
    width: 380px;
    display: inline-block;
    animation: fadeInDown;
    animation-duration: 0.8s;

    h2 {
      color: ${({ theme }) => theme.colors.blue_2};
      line-height: 32px;
      font-size: 20px;
      border: 2px solid ${({ theme }) => theme.colors.gray_3};
      border-radius: 6px;
      padding: 48px 16px;
    }

    > svg {
      position: absolute;
      top: 24px;
      right: 24px;
      font-weight: bold;
      font-size: 28px;
      color: gray;
      cursor: pointer;
    }

    @media (max-width: 380px) {
      width: 330px;
    }

    @media (max-width: 340px) {
      width: 280px;
    }
  }
`;
