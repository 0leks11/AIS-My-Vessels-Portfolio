// src/components/AboutSection/ProfileAvatarL.tsx
import React from "react";
import profileAvatarL from "../img/myphotoL.jpeg";

interface ProfileAvatarLProps {
  className?: string;
}

const ProfileAvatarL: React.FC<ProfileAvatarLProps> = ({ className }) => {
  return (
    <img
      src={profileAvatarL}
      alt="Profile Avatar"
      className={`w-100 h-100 max-w-[120px] md:max-w-[130px] lg:max-w-[150px] rounded-full object-cover ${className}`}
    />
  );
};

export default ProfileAvatarL;
