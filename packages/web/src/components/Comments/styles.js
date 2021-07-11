import styled, { css } from "styled-components";
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
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

export const CommentAuthor = styled.span`
  color: ${({ theme }) => theme.text};
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
`;

export const CommentDivider = styled.span`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 18px;
  font-weight: 700;
  margin: 0 4px;
`;

export const CommentDate = styled.span`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 14px;
  line-height: 20px;
`;

export const CommentBody = styled.p`
  font-size: 18px;
  line-height: 20px;
  color: ${({ theme }) => theme.text};
`;

export const CommentDeleteButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 50%;
  transform: translateY(50%);
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.textSecondary};
  cursor: pointer;
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
  &:hover {
    color: ${({ theme }) => theme.primary};
    transition: color 300ms ease-in-out;
    ${(props) =>
      props.disabled &&
      css`
        color: ${({ theme }) => theme.textSecondary};
      `}
  }
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
  padding: 12px 16px;
  margin-right: 8px;
  font-family: inherit;
  font-size: 16px;
  line-height: 18px;
  border-radius: 10px;
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
