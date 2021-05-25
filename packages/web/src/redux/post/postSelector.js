import { createSelector } from "reselect";

export const selectPostState = (state) => state.post;

export const postSelector = createSelector([selectPostState], (post) => post);
