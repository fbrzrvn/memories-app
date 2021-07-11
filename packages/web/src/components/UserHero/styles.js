import { Avatar } from "@material-ui/core";
import styled from "styled-components";

export const AuthorHero = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 32px;
  margin-bottom: 50px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0 24px;
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
    @media screen and (max-width: 496px) {
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
  @media screen and (max-width: 496px) {
    font-size: 22px;
  }
`;

export const AuthorSubtitle = styled.h5`
  font-size: 20px;
  margin: 0;
  @media screen and (max-width: 496px) {
    font-size: 18px;
  }
`;

export const AuthorStats = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

export const AuthorP = styled.p`
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  text-align: center;
  @media screen and (max-width: 375px) {
    padding: 8px 0 4px;
  }
`;

export const AuthorSmall = styled.small`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  padding: 0 8px 0;
  color: ${({ theme }) => theme.textSecondary};
  @media screen and (max-width: 375px) {
    font-size: 12px;
  }
`;
