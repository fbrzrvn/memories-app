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
  padding: 0 16px;
  @media screen and (max-width: 575px) {
    padding: 0;
  }
`;

export const CommentsTitle = styled.h2`
  font-size: 24px;
  line-height: 25px;
  margin-bottom: 28px;
  color: ${({ theme }) => theme.textSecondary};
`;

export const CommentsForm = styled.div`
  display: flex;
  width: 100%;
  margin: 16px auto;
  @media screen and (max-width: 575px) {
    margin: 0 0 16px;
  }
`;

export const CommentsInput = styled.input`
  flex: 1;
  padding: 10px;
  margin-right: 8px;
  font-family: inherit;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  border: ${({ error }) => error && `1px solid ${COLOR.danger700}`};
  outline: ${({ error }) => error && `none`};
  &:active,
  &:focus {
    outline: ${({ error }) => !error && `1px solid ${COLOR.deepPurple300}`};
  }
`;

export const CommentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommentCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 10px;
  background: ${({ theme }) => theme.navbar};
`;

export const CommentAuthor = styled.div`
  margin-bottom: 12px;
`;
