//src/components/RepositorySection/CommitsList.tsx
import React from 'react';
import { GitHubCommit } from '../../types/githubTypes';

interface CommitsListProps {
  commits: GitHubCommit[];
}

const CommitsList: React.FC<CommitsListProps> = ({ commits }) => {
  return (
    <div className="commits mb-6">
      <h3 className="text-2xl font-semibold mb-4">Recent Commits</h3>
      <ul>
        {commits.map((commit) => (
          <li key={commit.sha} className="mb-4">
            <a
              href={commit.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 font-medium"
            >
              {commit.commit.message}
            </a>
            <p className="text-gray-600">
              Committed on {new Date(commit.commit.author.date).toLocaleDateString()} by{' '}
              {commit.commit.author.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommitsList;