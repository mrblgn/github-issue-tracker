interface IGithubLabel {
  color: string;
  default: boolean;
  description: string | null;
  id: number;
  name: string;
  node_id: string;
  url: string;
}

interface IGithubReaction {
  '+1': number;
  '-1': number;
  confused: number;
  eyes: number;
  heart: number;
  hooray: number;
  laugh: number;
  rocket: number;
  total_count: number;
  url: string;
}

interface IGithubUser {
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  id: number;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
}

interface IGithubIssue {
  active_lock_reason: string | null;
  assignee: string | null;
  assignees: any[];
  author_association: string;
  body: string;
  closed_at: string | null;
  comments: number;
  comments_url: string;
  created_at: string;
  events_url: string;
  html_url: string;
  id: number;
  labels: IGithubLabel[];
  labels_url: string;
  locked: boolean;
  milestone: string | null;
  node_id: string;
  number: number;
  performed_via_github_app: string | null;
  reactions: IGithubReaction;
  repository_url: string;
  state: string;
  timeline_url: string;
  title: string;
  updated_at: string;
  url: string;
  user: IGithubUser;
}
