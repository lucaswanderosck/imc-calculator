import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: grid;
  place-content: center;

  form {
    max-width: 428px;
    width: 100%;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: rgba(0, 0, 0, 0.15) 2px 2px 3px;
    border-radius: 6px;
    padding: 32px 40px;

    > h1 {
      color: ${({ theme }) => theme.colors.blue_2};
      font-size: 32px;
      font-weight: bold;
      line-height: 64px;
    }

    label {
      display: block;
      font-size: 14px;
      margin-bottom: 8px;
      color: ${({ theme }) => theme.colors.green};
    }
  }
`;
