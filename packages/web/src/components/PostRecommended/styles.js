import styled from "styled-components";
import { COLOR } from "../../styles/colors";

export const PostRecommendedWrap = styled.div`
  width: 100%;
  margin: 0 auto 100px;
  padding: 100px 24px;
  background-color: ${COLOR.navbar};
`;

export const PostRecommendedH2 = styled.h2`
  font-size: 28px;
  font-weight: 500;
  line-height: 1.5;
`;
export const PostRecommendedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  grid-gap: 16px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 968px) {
    margin-bottom: 0 12px 50px;
  }
`;
