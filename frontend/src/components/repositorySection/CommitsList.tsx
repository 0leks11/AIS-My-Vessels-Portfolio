//src/components/RepositorySection/CommitsList.tsx
import React from 'react';
import { GitHubCommit } from '../../types/githubTypes';

interface CommitsListProps {
  commits: GitHubCommit[];
}

const CommitsList: React.FC<CommitsListProps> = ({ commits }) => {
    return (
      <div className="Box border-slate-200 mb-4">
        <h3 className="Box-header border-slate-200 h5">Recent Commits</h3>
        <ul className="list-style-none">
          {commits.map((commit) => (
            <li key={commit.sha} className="Box-row border-slate-200">
              <a
                href={commit.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-bold Link--primary"
              >
                {commit.commit.message}
              </a>
              <p className="text-small text-gray">
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