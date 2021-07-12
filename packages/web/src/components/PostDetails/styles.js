import { Avatar } from "@material-ui/core";
import styled from "styled-components";

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  @media screen and (max-width: 575px) {
    padding: 0;
  }
`;

export const PostAuthor = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  height: 72px;
  @media screen and (max-width: 575px) {
    margin: 0 8px 16px;
    height: 44px;
  }
`;

export const AuthorAvatar = styled(Avatar)`
  && {
    height: 72px;
    width: 72px;
    font-size: 32px;
    font-weight: 500;
    @media screen and (max-width: 575px) {
      height: 44px;
      width: 44px;
      font-size: 20px;
    }
  }
`;

export const AuthorWrap = styled.div`
  margin-left: 24px;
`;

export const AuthorName = styled.p`
  font-size: 24px;
  line-height: 1.5;
  text-decoration: none;
  color: ${({ theme }) => theme.tags};
  cursor: pointer;
  @media screen and (max-width: 575px) {
    font-size: 16px;
    font-weight: 500;
  }
`;

export const PostHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 24px 44px;
  @media screen and (max-width: 575px) {
    margin: 12px 8px;
  }
`;

export const PostTitle = styled.h2`
  color: ${({ theme }) => theme.text};
  font-size: 62px;
  font-weight: 300;
  line-height: 1.1;
  margin-bottom: 12px;
  @media screen and (max-width: 575px) {
    font-size: 44px;
  }
  @media screen and (max-width: 375px) {
    font-size: 38px;
  }
`;

export const PostInfo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const PostSmall = styled.small`
  font-size: 16px;
  line-height: 1.5;
  white-space: nowrap;
  color: ${({ theme }) => theme.border};
  margin: ${({ dot }) => dot && "0 4px"};
  @media screen and (max-width: 575px) {
    font-size: 14px;
  }
`;

export const PostActions = styled.div`
  position: absolute;
  right: 0;
`;

export const PostHero = styled.div`
  display: flex;
  margin-inline: 24px;
  @media screen and (max-width: 575px) {
    margin-inline: 0;
  }
`;

export const PostMedia = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 16/9;
  display: block;
  margin: 0 auto;
`;

export const PostContent = styled.div`
  margin: 0 24px 80px;
  @media screen and (max-width: 575px) {
    margin: 0 8px 80px;
  }
`;

export const PostTags = styled.p`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.5;
  color: ${({ theme }) => theme.primary};
  margin: 24px 0 16px;
`;

export const PostP = styled.div`
  line-height: 1.8;
  letter-spacing: 0.00938em;
  color: ${({ theme }) => theme.text};
  a {
    font-weight: 500;
    text-decoration: none;
    color: ${({ theme }) => theme.navbarLink};
    cursor: pointer;
    transition: color 300ms ease-in-out;
    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
  & span.keyword {
    color: #ff80bf;
  }
  & span.variable {
    color: #9580ff;
  }
  & span.object {
    color: #8be9fd;
  }
  & span.method {
    color: #8aff80;
  }
  & img {
    margin: 16px auto;
    width: 100%;
  }
  & ul {
    margin: 16px auto;
  }
`;
