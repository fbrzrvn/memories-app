import * as postTypes from "./postTypes";

export const postInitialState = {
  isLoaded: false,
  isLoading: false,
  error: null,
  posts: [],
  currentPostId: null,
};

const postReducer = (state = postInitialState, action) => {
  switch (action.type) {
    case postTypes.POST_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case postTypes.POST_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    case postTypes.POST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        posts: [...state.posts, action.payload],
      };
    }
    case postTypes.FETCH_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        posts: action.payload,
      };
    }
    case postTypes.GET_POST_ID: {
      return {
        ...state,
        currentPostId: action.payload,
      };
    }
    case postTypes.RESET_POST_ID: {
      return {
        ...state,
        currentPostId: null,
      };
    }
    case postTypes.RESET_POST_STATE: {
      return {
        ...postInitialState,
      };
    }
    case postTypes.UPDATE_POST: {
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post,
        ),
      };
    }
    case postTypes.DELETE_POST: {
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    }
    default:
      return state;
  }
};

export default postReducer;
