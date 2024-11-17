// src/components/AboutSection/ProfileAvatarS.tsx
import React from 'react';
import profileAvatarS from '../img/myphotoS.jpeg';

interface ProfileAvatarSProps {
    className?: string;
  }

const ProfileAvatarS: React.FC<ProfileAvatarSProps> = ({ className }) => {
    return (
        <img
            src={profileAvatarS}
            alt="Profile Avatar"
            className={`w-full h-auto max-w-[70px] md:max-w-[80px] lg:max-w-[95px] rounded-lg object-cover ${className}`}
        />
    );
};

export default ProfileAvatarS;