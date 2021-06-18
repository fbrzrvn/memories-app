import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLOR } from "../../styles/colors";

export const Card = styled.article`
  background: #fff;
  display: flex;
  flex-direction: column;
  padding-bottom: 8px;
  margin-top: 32px;
  border-radius: 10px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  position: relative;
  cursor: pointer;
  transition: all 0.2 ease-in-out;
`;

export const PostImg = styled.img`
  width: 100%;
  max-width: 250%;
  height: auto;
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
  color: ${COLOR.background};
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
`;

export const PostOverlay2 = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 16px;
  right: 0;
`;

export const PostInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 8px 16px 0;
`;

export const PostP = styled.p`
  color: rgba(0, 0, 0, 0.7);
  font-size: 15px;
  font-weight: 600;
  line-height: 1.5;
`;

export const PostTitleLink = styled(Link)`
  color: ${COLOR.text};
  font-size: 32px;
  font-weight: 400;
  margin: 8px 0 16px;
  text-decoration: none;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
