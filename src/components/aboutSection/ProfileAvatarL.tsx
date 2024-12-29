// src/components/AboutSection/ProfileAvatarL.tsx
import React from "react";
import profileAvatarL from "../img/myphotoL.jpeg";

interface ProfileAvatarLProps {
  className?: string;
}

const ProfileAvatarL: React.FC<ProfileAvatarLProps> = ({ className }) => {
  return (
    <div
      className={`fixed w-100 h-100 max-w-[120px] md:max-w-[130px] lg:max-w-[150px] border-2 border-zinc-600 rounded-full ${className}`}
    >
      <img
        src={profileAvatarL}
        alt="Profile Avatar"
        className="w-full h-full rounded-full object-cover"
      />
    </div>
  );
};

export default ProfileAvatarL;
