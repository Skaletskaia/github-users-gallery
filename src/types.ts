export interface RepositoryAPI {
  id?: number;
  name: string;
  description: string;
  owner: { login: string };
  html_url: string;
  topics: string[];
  stargazers_count: number;
  forks: number;
}
