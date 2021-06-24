import { number } from "prop-types";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { postSelector } from "../../redux/post/postSelector";
import { PaginationBtnLink, PaginationWrap } from "./styles";

const Pagination = ({ page }) => {
  const { numberOfPages } = useSelector(postSelector);

  return (
    <PaginationWrap
      count={numberOfPages}
      page={page || 1}
      variant="outlined"
      shape="rounded"
      renderItem={(item) => (
        <PaginationBtnLink
          {...item}
          component={Link}
          to={`/posts?page=${item.page}`}
        />
      )}
    />
  );
};

Pagination.propTypes = {
  page: number.isRequired,
};

export default Pagination;
