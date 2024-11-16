// src/components/AboutSection/ProfileAvatarL.tsx
import React from 'react';
import profileAvatarL from '../img/myphotoL.jpeg';

const ProfileAvatarL: React.FC = () => {
    return (
        <img
            src={profileAvatarL}
            alt="Profile Avatar"
            className="w-full h-auto max-w-[200px] md:max-w-[250px] lg:max-w-[300px] rounded-lg object-cover"
        />
    );
};

export default ProfileAvatarL;