// src/hooks/useUserProfile.ts
import { useState, useEffect } from 'react';
import { GitHubUser } from '../types/githubTypes';

const OWNER = '0leks11';

export const useUserProfile = () => {
  const [userProfile, setUserProfile] = useState<GitHubUser | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${OWNER}`);
        if (!response.ok) {
          throw new Error('Ошибка при загрузке профиля пользователя');
        }
        const data = await response.json();
        setUserProfile(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserProfile();
  }, []);

  return userProfile;
};