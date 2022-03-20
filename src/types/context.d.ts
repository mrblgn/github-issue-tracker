type TState = {
  loading: boolean;
  issues?: OctokitResponse;
};

interface IGlobalProvider {
  children: ReactNode;
}

type IssueResponse = Endpoints['GET /repos/{owner}/{repo}']['response'];

interface IGlobalContext extends TState {
  setLoading: (loading: boolean) => void;
  setIssues: (issues: IssueResponse) => void;
}

type ActionType =
  | {type: 'SET_LOADING'; payload: boolean}
  | {type: 'SET_ISSUES'; payload: IssueResponse};
