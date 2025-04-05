import type { GitHubRepo } from '@/types/github'

export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
  if (!response.ok) throw new Error('Failed to fetch GitHub repos')
  const data = await response.json()
  return data as GitHubRepo[]
}