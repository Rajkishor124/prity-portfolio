export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  topics: string[];
  language: string;
  updated_at: string;
}

export const fetchGithubRepos = async (username: string): Promise<GitHubRepo[]> => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
    if (!response.ok) {
      throw new Error('Failed to fetch repositories');
    }
    const data = await response.json();
    return data.filter((repo: any) => !repo.fork); // Filter out forked repositories
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
};
