import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.red};
  animation: slideInDown 0.6s;

  > div {
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 400;

    @media (max-width: 480px) {
      padding: 12px 6px;
      font-size: 12px;
    }
  }
`;
