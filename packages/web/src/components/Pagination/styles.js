import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLOR } from "../../styles/colors";

export const PaginationWrap = styled.div`
  display: flex;
  margin: 50px 0 0 auto;
  @media screen and (max-width: 575px) {
    margin: 50px auto;
  }
`;

export const PaginationBtnLink = styled(Link)`
  text-decoration: none;
  color: ${COLOR.deepPurple500};
  background: ${COLOR.background};
  border: 1px solid ${COLOR.deepPurple500};
  border-radius: 10px;
  padding: 8px 24px;
  margin: 0 16px;
  &:hover {
    transition: all 300ms ease-in-out;
    font-weight: 500;
  }
`;
