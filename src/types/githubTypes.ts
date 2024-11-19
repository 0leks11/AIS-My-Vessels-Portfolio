// src/types/githubTypes.ts

export interface GitHubContent {
    name: string;
    path: string;
    type: 'file' | 'dir';
    sha: string;
    url: string;
    git_url: string;
    html_url: string;
    download_url: string;
  }
  
  export interface GitHubCommit {
    sha: string;
    commit: {
      message: string;
      author: {
        name: string;
        email: string;
        date: string;
      };
    };
    html_url: string;
  }
  
  export interface GitHubUser {
    login: string;
    avatar_url: string;
    html_url: string;
    name: string;
    created_at: string;
    public_repos: number;
    followers: number;
    following: number;
  }