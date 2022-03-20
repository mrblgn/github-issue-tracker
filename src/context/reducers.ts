import {SET_LOADING, SET_ISSUES} from './types';

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
    default:
      return state;
  }
};
