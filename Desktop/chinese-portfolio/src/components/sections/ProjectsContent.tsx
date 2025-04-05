// src/components/sections/ProjectsContent.tsx
'use client'

import { useEffect, useState } from 'react'
import { fetchGitHubRepos } from '@/lib/github'
import type { GitHubRepo } from '@/types/github'

export default function ProjectsContent() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadRepos = async () => {
      try {
        const data = await fetchGitHubRepos('ADELINEXINYI')
        setRepos(data)
      } catch (err) {
        setError('Failed to load GitHub projects')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    loadRepos()
  }, [])

  if (loading) return <div className="text-center py-12">Loading projects...</div>
  if (error) return <div className="text-center py-12 text-red-500">{error}</div>

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold mb-12 text-center">GitHub Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <div key={repo.id} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">
                <a 
                  href={repo.html_url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600"
                >
                  {repo.name}
                </a>
              </h3>
              {repo.stargazers_count > 0 && (
                <span className="flex items-center text-sm text-gray-600">
                  ★ {repo.stargazers_count}
                </span>
              )}
            </div>
            
            {repo.description && (
              <p className="text-gray-600 mb-4 line-clamp-2">
                {repo.description}
              </p>
            )}
            
            {repo.language && (
              <span className="inline-block bg-gray-100 px-2 py-1 text-xs rounded mr-2 mb-2">
                {repo.language}
              </span>
            )}
            
            {repo.topics.length > 0 && (
              <div className="flex flex-wrap mt-2">
                {repo.topics.slice(0, 3).map((topic) => (
                  <span 
                    key={topic}
                    className="inline-block bg-blue-100 text-blue-800 px-2 py-1 text-xs rounded mr-2 mb-2"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}