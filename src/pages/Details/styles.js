import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    padding: 64px 0;
    overflow-y: auto;
  }
`;

export const Content = styled.div`
  width: 1150px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 19px;

    margin-top: 24px;

    > h1 {
      font-family: Roboto Slab;
      font-size: 36px;
      font-weight: 500;
      line-height: normal;
    }

    svg {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
    }
  }

  > .Author {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;

    img {
      width: 24px;
      height: 24px;
      border-radius: 50%;
    }

    svg {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  > .Tags {
    display: flex;
    flex-direction: row;
    gap: 2px;

    margin: 48px 0;
  }

  p {
    text-align: justify;
  }

  p + p {
    margin-top: 24px;
  }
`;
