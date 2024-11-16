// src/components/AboutSection/ProfileAvatarS.tsx
import React from 'react';
import profileAvatarS from '../img/myphotoS.jpeg';

const ProfileAvatarS: React.FC = () => {
    return (
        <img
            src={profileAvatarS}
            alt="Profile Avatar"
            className="w-full h-auto max-w-[70px] md:max-w-[80px] lg:max-w-[95px] rounded-lg object-cover"
        />
    );
};

export default ProfileAvatarS;