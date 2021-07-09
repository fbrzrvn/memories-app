import { Avatar } from "@material-ui/core";
import styled from "styled-components";

export const AuthorHero = styled.div`
  display: flex;
  padding: 12px 0;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AuthorInfo = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const AuthorAvatar = styled(Avatar)`
  && {
    height: 72px;
    width: 72px;
    @media screen and (max-width: 375px) {
      height: 44px;
      width: 44px;
    }
  }
`;

export const AuthorHeaders = styled.div`
  margin-left: 12px;
`;

export const AuthorTitle = styled.h2`
  font-size: 32px;
  line-height: 1;
  margin: 0;
  @media screen and (max-width: 375px) {
    font-size: 22px;
  }
`;

export const AuthorSubtitle = styled.h5`
  font-size: 20px;
  margin: 0;
  @media screen and (max-width: 375px) {
    font-size: 18px;
  }
`;

export const AuthorStats = styled.div`
  min-width: 300px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const AuthorSmall = styled.small`
  font-size: 16px;
  line-height: 18px;
  margin: 0;
`;
