import {Octokit} from '@octokit/core';
import {PRIVATE_KEY} from 'react-native-dotenv';

export const octokit = new Octokit({
  auth: PRIVATE_KEY,
});

export const requestUser = async () => await octokit.request('/user');

export const requestIssues = async (
  owner: string,
  repo: string,
  perPage: number,
  page: number,
  state: 'all' | 'open' | 'closed',
) =>
  await octokit.request('GET /repos/{owner}/{repo}/issues', {
    owner,
    repo,
    page,
    per_page: perPage,
    state,
  });

export const capitalize = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);
