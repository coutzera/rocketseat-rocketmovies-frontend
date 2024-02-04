import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
    "header"
    "content";

  main {
    margin-top: 40px;
    padding: 0 123px;
  }

  .background {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_000};
    padding: 16px;

    border-radius: 8px;
  }

  .footer {
    display: flex;
    gap: 40px;
  }

  .invert {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_000};
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;

  > header {
    display: flex;
    flex-direction: column;
    gap: 24px;

    a {
      display: flex;
      align-items: center;
      justify-content: left;
      gap: 12px;

      text-decoration: none;
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  .first-line {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 40px;
  }
`;
