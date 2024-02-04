import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  font-size: 16px;
  background: none;
  border: none;

  color: ${({ theme }) => theme.COLORS.PINK}; 
`;
