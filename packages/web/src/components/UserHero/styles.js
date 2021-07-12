import { Avatar } from "@material-ui/core";
import styled from "styled-components";

export const AuthorHero = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0 16px;
  }
`;

export const AuthorInfo = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 768px) {
    margin-bottom: 32px;
  }
  @media screen and (max-width: 496px) {
    grid-template-columns: 80px 1fr;
  }
`;

export const AuthorAvatar = styled(Avatar)`
  && {
    width: 120px;
    height: 120px;
    @media screen and (max-width: 496px) {
      height: auto;
      width: 100%;
    }
  }
`;

export const AuthorHeaders = styled.div`
  margin-left: 12px;
`;

export const AuthorTitle = styled.h2`
  font-size: 28px;
  line-height: 1;
  margin: 0;
  @media screen and (max-width: 496px) {
    font-size: 22px;
  }
`;

export const AuthorSubtitle = styled.h5`
  font-size: 16px;
  color: ${({ theme }) => theme.textSecondary};
  @media screen and (max-width: 496px) {
    font-size: 14px;
  }
`;

export const AuthorActionBtn = styled.button`
  padding: 8px 16px;
  white-space: nowrap;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.2px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.textSecondary};
  color: ${({ theme }) => theme.text};
  background: transparent;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
    border: 1px solid transparent;
    transition: all 300ms ease-in-out;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const AuthorStats = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 100%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
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
