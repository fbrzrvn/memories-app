import styled from "styled-components";

export const Card = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  background: ${({ theme }) => theme.navbar};
`;

export const PostHero = styled.div`
  margin-bottom: 8px;
  cursor: pointer;
`;

export const PostImg = styled.img`
  width: 100%;
  max-width: 300px;
  height: 150px;
  aspect-ratio: 16/9;
  border-radius: 10px 10px 0 0;
  background: rgba(0, 0, 0, 0.9);
`;

export const PostInfo = styled.div`
  padding: 8px 16px 0;
`;

export const PostP = styled.p`
  color: ${({ theme }) => theme.primary};
  font-size: 15px;
  font-weight: 600;
  line-height: 1.5;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 300px;
`;

export const PostTitle = styled.h2`
  color: ${({ theme }) => theme.text};
  font-size: 32px;
  font-weight: 400;
  margin: 8px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 300px;
  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;
