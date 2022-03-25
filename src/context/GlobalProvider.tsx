import React, {createContext, FC, useReducer} from 'react';
import {appReducer} from './reducers';
import {
  SET_ISSUES,
  SET_LOADING,
  SET_SEARCH_PARAMS,
  SET_SELECTED_ISSUE,
  TOGGLE_BOOKMARK_ISSUE,
} from './types';

const initialState: TState = {
  loading: false,
  searchParams: {
    owner: '',
    repo: '',
    perPage: 50,
    page: 1,
    state: 'all',
  },
};

export const GlobalContext =
  createContext<Partial<IGlobalContext>>(initialState);

// provider component
export const GlobalProvider: FC<{children: Element | Element[]}> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const setLoading = (loading: boolean) => {
    dispatch({type: SET_LOADING, payload: loading});
  };

  const setSearchParams = (params: TSearchParams) => {
    dispatch({type: SET_SEARCH_PARAMS, payload: params});
  };

  const setIssues = (issues: IssueResponse) => {
    dispatch({type: SET_ISSUES, payload: issues});
  };

  const setSelectedIssue = (issue: IGithubIssue) => {
    dispatch({type: SET_SELECTED_ISSUE, payload: issue});
  };

  const toggleBookmark = (issue: IGithubIssue) => {
    dispatch({type: TOGGLE_BOOKMARK_ISSUE, payload: issue});
  };

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        setLoading,
        setSearchParams,
        setIssues,
        setSelectedIssue,
        toggleBookmark,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
