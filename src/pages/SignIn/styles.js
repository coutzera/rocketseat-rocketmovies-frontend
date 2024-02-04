import styled from "styled-components";
import backgroundImg from "../../assets/background.png";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 134px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 8px;

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 48px;
    font-weight: 700;
    line-height: 63px;
    letter-spacing: 0em;
    text-align: left;
  }

  > p {
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
  }

  > h2 {
    margin-top: 48px;
    margin-bottom: 48px;
    text-align: center;
  }

  > a {
    margin-top: 48px;
    text-align: center;
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  opacity: 0.2;
`;
