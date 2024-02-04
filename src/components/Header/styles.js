import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;

  height: 116px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 123px;

  gap: 64px;
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.COLORS.PINK};
  font-size: 24px;
  font-weight: 700;
  line-height: normal;
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  width: 18%;
  text-decoration: none;
  color: ${({ theme }) => theme.COLORS.PINK};
  > img {
    width: 64px;
    height: 64px;

    border: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border-radius: 50px;
  }

  > div {
    display: flex;
    flex-direction: column;

    margin-right: 10px;
    text-align: right;
    line-height: 24px;

    strong {
      font-size: 14px;
      font-weight: 700;
    }

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;
