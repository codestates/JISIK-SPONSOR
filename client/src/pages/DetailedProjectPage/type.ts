export interface Category {
  name: string;
}

export interface Author {
  name: string;
  nickname: string;
  bio?: any;
  profile_url: string;
}

export interface ProjectTeam {
  id: number;
  team_name: string;
  team_description: string;
  profile_url?: any;
}

export interface ProjectMilestone {
  id: number;
  title: string;
  goal_date: Date;
}

export interface ProjectTeamMember {
  id: number;
  name: string;
  bio: string;
}

export interface BudgetItem {
  id: number;
  title: string;
  amount: string;
}

export interface Project {
  id: number;
  title: string;
  path: string;
  user_id: number;
  category_id: number;
  description: string;
  thumbnail_url?: any;
  term: number;
  start_date: Date;
  end_date: Date;
  status: string;
  goal: string;
  pledged: string;
  remainder: string;
  sponsors: number;
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
  project_teams: ProjectTeam[];
  project_milestones: ProjectMilestone[];
  project_team_members: ProjectTeamMember[];
  budget_items: BudgetItem[];
}

export interface Data {
  projects: Project;
}
