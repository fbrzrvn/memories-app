import { Avatar } from "@material-ui/core";
import styled from "styled-components";

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  border-radius: 10px;
  @media screen and (max-width: 575px) {
    padding: 0;
  }
`;

export const PostAuthor = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 24px;
  height: 72px;
  @media screen and (max-width: 575px) {
    margin: 0 0 16px;
    height: 44px;
  }
`;

export const AuthorAvatar = styled(Avatar)`
  && {
    height: 72px;
    width: 72px;
    @media screen and (max-width: 575px) {
      height: 40px;
      width: 40px;
    }
  }
`;

export const PostAuthorName = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  color: ${({ theme }) => theme.tags};
  margin-left: 16px;
`;

export const PostHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 24px 44px;
  @media screen and (max-width: 575px) {
    margin: 12px 0;
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
  display: flex;
  align-items: center;
`;

export const PostSmall = styled.small`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  white-space: nowrap;
  color: ${({ theme }) => theme.border};
  margin: ${({ dot }) => dot && "0 4px"};
  @media screen and (max-width: 575px) {
    font-size: 14px;
  }
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
  margin: 12px 24px 80px;
  @media screen and (max-width: 575px) {
    margin: 12px 0 80px;
  }
`;

export const PostTags = styled.p`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.5;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 32px;
`;

export const PostP = styled.div`
  line-height: 1.8;
  font-size: 20px;
  font-weight: 400;
`;
