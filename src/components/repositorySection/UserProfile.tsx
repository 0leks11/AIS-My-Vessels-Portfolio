//src/components/RepositorySection/UserProfile.tsx
import React from 'react';
import { GitHubUser } from '../../types/githubTypes';

interface UserProfileProps {
  userProfile: GitHubUser;
}

const UserProfile: React.FC<UserProfileProps> = ({ userProfile }) => {
  return (
    <div className="user-profile flex items-center mb-6">
      <a href={userProfile.html_url} target="_blank" rel="noopener noreferrer">
        <img
          src={userProfile.avatar_url}
          alt={userProfile.name}
          className="w-16 h-16 rounded-full mr-4"
        />
      </a>
      <div>
        <h3 className="text-xl font-semibold">{userProfile.name}</h3>
        <p className="text-gray-600">
          Joined on {new Date(userProfile.created_at).toLocaleDateString()}
        </p>
        <p className="text-gray-600">
          Public Repos: {userProfile.public_repos} | Followers: {userProfile.followers} | Following:{' '}
          {userProfile.following}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;