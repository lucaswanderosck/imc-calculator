import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: grid;
  place-content: center;

  form {
    width: 360px;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: rgba(0, 0, 0, 0.15) 2px 2px 3px;
    border-radius: 6px;
    padding: 44px;

    > h1 {
      color: ${({ theme }) => theme.colors.blue_2};
      font-size: 28px;
      font-weight: bold;
      margin-bottom: 26px;

      @media (max-width: 320px) {
        font-size: 24px;
      }
    }

    label {
      display: block;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.green};
    }

    @media (max-width: 380px) {
      width: 320px;
    }

    @media (max-width: 320px) {
      width: 290px;
    }
  }
`;
