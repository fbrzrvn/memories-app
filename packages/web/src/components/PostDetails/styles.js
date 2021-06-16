import { Avatar } from "@material-ui/core";
import styled from "styled-components";
import { COLOR } from "../../styles/colors";

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 32px auto;
  padding: 16px;
  border-radius: 10px;
  @media screen and (max-width: 575px) {
    margin: auto;
    padding: 24px 0;
  }
`;

export const PostAuthor = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 24px;
  height: 72px;
  @media screen and (max-width: 575px) {
    margin: 16px;
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
  color: rgba(0, 0, 0, 0.7);
  margin-left: 16px;
`;

export const PostHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 24px 44px;
  @media screen and (max-width: 575px) {
    margin: 12px;
  }
`;

export const PostTitle = styled.h2`
  color: ${COLOR.text};
  font-size: 62px;
  font-weight: 300;
  line-height: 1.1;
  margin-bottom: 12px;
  @media screen and (max-width: 575px) {
    font-size: 44px;
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
  color: rgba(0, 0, 0, 0.54);
  margin: ${({ dot }) => dot && "0 4px"};
  @media screen and (max-width: 575px) {
    font-size: 14px;
  }
`;

export const PostHero = styled.div`
  display: flex;
  margin-inline: 24px;
  @media screen and (max-width: 575px) {
    margin-inline: 12px;
  }
`;

export const PostMedia = styled.img`
  aspect-ratio: 21/9;
  height: auto;
  width: 730px;
  max-width: 100%;
  display: block;
  margin: 0 auto;
`;

export const PostContent = styled.div`
  margin: 12px 24px 32px;
  @media screen and (max-width: 575px) {
    margin: 12px;
  }
`;

export const PostTags = styled.p`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.5;
  color: ${COLOR.deepPurple400};
  margin-bottom: 32px;
`;

export const PostP = styled.div`
  line-height: 1.8;
  font-size: 20px;
  font-weight: 400;
`;

export const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 24px 8px;
  @media screen and (max-width: 575px) {
    margin: 12px;
  }
`;
