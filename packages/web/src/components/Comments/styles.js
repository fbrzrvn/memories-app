import styled from "styled-components";
import { COLOR } from "../../styles/colors";

export const CommentsContainer = styled.section`
  background: ${({ theme }) => theme.background};
  display: flex;
  flex-direction: column;
  padding: 50px 24px;
  max-width: 1100px;
  margin: auto;
`;

export const CommentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 16px;
  @media screen and (max-width: 575px) {
    padding: 0;
  }
`;

export const CommentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const CommentCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.navbar};
`;

export const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const CommentAuthor = styled.span`
  color: ${({ theme }) => theme.text};
  font-size: 13px;
  font-weight: 700;
`;

export const CommentDivider = styled.span`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 18px;
  font-weight: 700;
  margin: 0 4px;
`;

export const CommentDate = styled.span`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 13px;
`;

export const CommentBody = styled.p`
  font-size: 18px;
  line-height: 20px;
  color: ${({ theme }) => theme.text};
`;

export const CommentsForm = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto 16px;
  @media screen and (max-width: 575px) {
    flex-direction: column;
  }
`;

export const CommentsTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.textSecondary};
`;

export const CommentsInput = styled.input`
  flex: 1;
  padding: 10px;
  margin-right: 8px;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  border-radius: 4px;
  border: none;
  border: ${({ error }) => error && `1px solid ${COLOR.danger700}`};
  outline: ${({ error }) => error && `none`};
  &:active,
  &:focus {
    outline: ${({ error }) => !error && `1px solid ${COLOR.deepPurple300}`};
  }
  @media screen and (max-width: 575px) {
    margin-right: 0;
    margin-bottom: 16px;
  }
`;
