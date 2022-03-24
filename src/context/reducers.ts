import {
  SET_LOADING,
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
      const hasBookmark = state.bookmarked?.includes(action.payload);
      const bookmarked = hasBookmark
        ? state.bookmarked?.splice(state.bookmarked?.indexOf(action.payload), 0)
        : state.bookmarked
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
