//src/components/RepositorySection/UserProfile.tsx
import React from 'react';
import { GitHubUser } from '../../types/githubTypes';

interface UserProfileProps {
  userProfile: GitHubUser;
}

const UserProfile: React.FC<UserProfileProps> = ({ userProfile }) => {
    return (
      <div className="Box border-slate-200 d-flex flex-items-center mb-1">
        <a href={userProfile.html_url} target="_blank" rel="noopener noreferrer">
          <img
            src={userProfile.avatar_url}
            alt={userProfile.name}
            className="w-11 h-11 rounded-full mr-3 ml-3"
          />
        </a>
        <div>
          <h3 className="h4">{userProfile.name}</h3>
          <p className="text-gray">
            Joined on {new Date(userProfile.created_at).toLocaleDateString()}
          </p>
          <p className="text-gray">
            Public Repos: {userProfile.public_repos} | Followers: {userProfile.followers} | Following:{' '}
            {userProfile.following}
          </p>
        </div>
      </div>
    );
};

export default UserProfile;