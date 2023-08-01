import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  padding: 14px 12px;
  cursor: pointer;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  margin-top: 28px;
  background-color: ${({ theme }) => theme.colors.blue_1};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  font-weight: 500;
  letter-spacing: 0.4px;
  transition: all 0.3s;

  > svg {
    font-size: 16px;
    transition: all 0.3s;
  }

  &:hover svg {
    transform: translateX(3px);
    transition: all 0.3s;
  }

  &:hover {
    filter: brightness(0.95);
  }
`;
