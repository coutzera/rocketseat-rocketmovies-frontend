import styled from "styled-components";

export const Container = styled.span`
  font-size: 12px;
  padding: 8px 16px;

  border-radius: 5px;
  margin-right: 6px;

  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
