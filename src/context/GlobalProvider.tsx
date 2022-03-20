import React, {createContext, FC, useReducer} from 'react';
import {appReducer} from './reducers';
import {SET_ISSUES, SET_LOADING} from './types';

const initialState: TState = {
  loading: false,
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

  const setIssues = (issues: IssueResponse) => {
    dispatch({type: SET_ISSUES, payload: issues});
  };

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        setLoading,
        setIssues,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
