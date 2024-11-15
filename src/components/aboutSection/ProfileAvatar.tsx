import React from 'react';
import profileAvatar from '../img/myphoto.jpeg';

const ProfileAvatar: React.FC = () => {
  return (
    <img
      src={profileAvatar}
      alt="Profile Avatar"
      className="w-72 h-84 mb-4 mr-4 rounded-lg"
    />
  );
};

export default ProfileAvatar;