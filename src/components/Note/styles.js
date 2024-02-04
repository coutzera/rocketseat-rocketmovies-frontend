import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};

  border: none;
  border-radius: 10px;

  padding: 32px;
  margin-bottom: 24px;

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-bottom: 8px;
  }

  > p {
    margin-top: 15px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: justify;
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
  } 
`;
