import { Pagination, PaginationItem } from "@material-ui/lab";
import styled from "styled-components";
import { COLOR } from "../../styles/colors";

export const PaginationWrap = styled(Pagination)`
  display: flex;
  margin: 50px 0 0 auto;
  @media screen and (max-width: 575px) {
    margin: 50px auto;
  }
`;

export const PaginationBtnLink = styled(PaginationItem)`
  && {
    font-family: inherit;
    font-weight: 600;
    color: ${COLOR.deepPurple500};
    border: 1px solid ${COLOR.deepPurple300};
    border-radius: 10px;
    &:hover {
      transition: all 300ms ease-in-out;
      font-weight: 500;
    }
  }
`;
