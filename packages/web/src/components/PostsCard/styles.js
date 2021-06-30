import { Button } from "@material-ui/core";
import styled from "styled-components";

export const Card = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-bottom: ${({ isAuthenticated }) => isAuthenticated && "42px"};
  border-radius: 10px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  background: ${({ theme }) => theme.navbar};
  transition: all 0.2 ease-in-out;
`;

export const PostImg = styled.img`
  width: 100%;
  max-width: 300px;
  height: 150px;
  aspect-ratio: 16/9;
  border-radius: 10px 10px 0 0;
  background: rgba(0, 0, 0, 0.9);
`;

export const PostOverlay = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 16px;
  left: 16px;
`;

export const PostSpan = styled.span`
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
`;

export const PostOverlay2 = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 16px;
  right: 8px;
`;

export const PostInfo = styled.div`
  width: 100%;
  padding: 8px 16px 0;
  cursor: pointer;
`;

export const PostP = styled.p`
  color: ${({ theme }) => theme.primary};
  font-size: 15px;
  font-weight: 600;
  line-height: 1.5;
`;

export const PostTitle = styled.h2`
  color: ${({ theme }) => theme.text};
  font-size: 32px;
  font-weight: 400;
  margin: 8px 0 16px;
  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

export const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 8px;
  width: 100%;
  padding: 0 16px;
`;

export const PostFooterButton = styled(Button)`
  && {
    color: ${({ theme }) => theme.textSecondary};
    font-family: inherit;
  }
`;
