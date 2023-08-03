import styled from "styled-components";

export const Container = styled.input`
  display: block;
  width: 100%;
  margin: 8px 0 14px;
  padding: 14px 12px;
  background-color: ${({ theme }) => theme.colors.gray_1};
  color: ${({ theme }) => theme.colors.gray_4};
  border: 2px solid ${({ theme }) => theme.colors.gray_3};
  border-radius: 4px;
  outline: none;
  font-weight: 500;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.blue_1};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray_2};
  }
`;
