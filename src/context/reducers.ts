import {
  SET_LOADING,
  SET_SEARCH_PARAMS,
  SET_ISSUES,
  SET_SELECTED_ISSUE,
  TOGGLE_BOOKMARK_ISSUE,
} from './types';

export const appReducer = (state: TState, action: ActionType) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_SEARCH_PARAMS:
      return {
        ...state,
        searchParams: action.payload,
      };
    case SET_ISSUES:
      return {
        ...state,
        issues: action.payload,
      };
    case SET_SELECTED_ISSUE:
      return {
        ...state,
        selected: action.payload,
      };
    case TOGGLE_BOOKMARK_ISSUE:
      const hasBookmark = state.bookmarked
        ?.map(issue => issue.id)
        .includes(action.payload.id);
      const bookmarked = hasBookmark
        ? state.bookmarked?.filter(issue => issue.id !== action.payload.id)
        : state.bookmarked && state.bookmarked?.length
        ? [...state.bookmarked, action.payload]
        : [action.payload];
      return {
        ...state,
        bookmarked,
      };
    default:
      return state;
  }
};
