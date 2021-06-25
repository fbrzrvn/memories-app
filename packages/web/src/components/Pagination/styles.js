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
    font-weight: ${({ selected }) => (selected ? "500" : "300")};
    color: ${({ selected }) =>
      selected ? `${COLOR.deepPurple500}` : `${COLOR.deepPurple300}`};
    transition: all 300ms ease-in-out;
    &:hover {
      font-weight: 500;
      transition: all 300ms ease-in-out;
    }
  }
`;
