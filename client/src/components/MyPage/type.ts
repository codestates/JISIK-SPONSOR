export interface Category {
  name: string;
}

export interface Author {
  name: string;
  nickname: string;
  bio: string;
  profile_url: string;
}

export interface Row {
  id: number;
  title: string;
  path: string;
  user_id: number;
  category_id: number;
  description: string;
  thumbnail_url: string;
  term: string;
  start_date: string;
  end_date: string;
  status: string;
  goal: string;
  pledged: string;
  remainder: string;
  sponsors: string;
  comments: number;
  wishes: number;
  views: number;
  project_background: string;
  project_progress: string;
  project_goals: string;
  budget_synopsis: string;
  milestone_description: string;
  researcher_word: string;
  created_at: Date;
  updated_at: Date;
  category: Category;
  author: Author;
}

export interface Projects {
  count: number;
  page: number;
  rows: Row[];
}

export interface Data {
  projects: Projects;
}

export interface User {
  nickname: string;
  profile_url: string;
}

export interface Project {
  title: string;
  path: string;
}

export interface Comment {
  id: number;
  project_id: number;
  content: string;
  created_at: Date;
  updated_at: Date;
  user: User;
  project: Project;
}

export interface CommentProps {
  comments: Comment[];
}
