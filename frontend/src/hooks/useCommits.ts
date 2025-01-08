// src/hooks/useCommits.ts
import { useState, useEffect } from "react";
import { GitHubCommit } from "../types/githubTypes";

const OWNER = "0leks11";
const REPO = "ai-chatbot";

export const useCommits = () => {
  const [commits, setCommits] = useState<GitHubCommit[]>([]);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${OWNER}/${REPO}/commits?per_page=2`
        );
        if (!response.ok) {
          throw new Error("Error loading commits");
        }
        const data = await response.json();
        setCommits(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCommits();
  }, []);

  return commits;
};
