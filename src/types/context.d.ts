type TState = {
  loading: boolean;
  issues?: OctokitResponse;
  selected?: IGithubIssue;
  bookmarked?: number[];
};

interface IGlobalProvider {
  children: ReactNode;
}

type IssueResponse = Endpoints['GET /repos/{owner}/{repo}']['response'];

interface IGlobalContext extends TState {
  setLoading: (loading: boolean) => void;
  setIssues: (issues: IssueResponse) => void;
  setSelectedIssue: (issue: IGithubIssue) => void;
  toggleBookmark: (issueId: number) => void;
}

type ActionType =
  | {type: 'SET_LOADING'; payload: boolean}
  | {type: 'SET_ISSUES'; payload: IssueResponse}
  | {type: 'SET_SELECTED_ISSUE'; payload: IGithubIssue}
  | {type: 'TOGGLE_BOOKMARK_ISSUE'; payload: number};
