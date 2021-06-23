import { number } from "prop-types";
import React from "react";
import { useSelector } from "react-redux";
import { postSelector } from "../../redux/post/postSelector";
import { PaginationBtnLink, PaginationWrap } from "./styles";

const Pagination = ({ page }) => {
  const { numberOfPages } = useSelector(postSelector);

  return (
    <PaginationWrap>
      {page > 1 && (
        <PaginationBtnLink to={`/posts?page=${page - 1}`}>
          Prev
        </PaginationBtnLink>
      )}
      {page < numberOfPages && (
        <PaginationBtnLink to={`/posts?page=${page + 1}`}>
          Next
        </PaginationBtnLink>
      )}
    </PaginationWrap>
  );
};

Pagination.propTypes = {
  page: number.isRequired,
};

export default Pagination;
