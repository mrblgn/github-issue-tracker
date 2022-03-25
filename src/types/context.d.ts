type TState = {
  loading: boolean;
  searchParams: TSearchParams;
  issues?: OctokitResponse;
  selected?: IGithubIssue;
  bookmarked?: IGithubIssue[];
};

type TIssueState = 'all' | 'open' | 'closed';

type TSearchParams = {
  owner: string;
  repo: string;
  perPage: number;
  page: number;
  state: TIssueState;
};

interface IGlobalProvider {
  children: ReactNode;
}

type IssueResponse = Endpoints['GET /repos/{owner}/{repo}']['response'];

interface IGlobalContext extends TState {
  setLoading: (loading: boolean) => void;
  setSearchParams: (params: TSearchParams) => void;
  setIssues: (issues: IssueResponse) => void;
  setSelectedIssue: (issue: IGithubIssue) => void;
  toggleBookmark: (issue: IGithubIssue) => void;
}

type ActionType =
  | {type: 'SET_LOADING'; payload: boolean}
  | {type: 'SET_SEARCH_PARAMS'; payload: TSearchParams}
  | {type: 'SET_ISSUES'; payload: IssueResponse}
  | {type: 'SET_SELECTED_ISSUE'; payload: IGithubIssue}
  | {type: 'TOGGLE_BOOKMARK_ISSUE'; payload: IGithubIssue};
