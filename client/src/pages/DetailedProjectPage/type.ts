export interface Category {
  name: string;
}

export interface User {
  name: string;
  nickname: string;
  bio: string;
  profile_url: string;
}

export interface ProjectTeam {
  id: number;
  team_name: string;
  team_description: string;
  profile_url: string;
}

export interface ProjectTeamMember {
  id: number;
  name: string;
  bio: string;
}

export interface BudgetItem {
  id: number;
  title: string;
  amount: number;
}

export interface ProjectMilestone {
  id: number;
  title: string;
  goal_date: Date;
}

export interface Project {
  id: number;
  title: string;
  path: string;
  description: string;
  thumbnail_url: string;
  term: number;
  start_date: string;
  end_date: string;
  status: string;
  goal: string;
  pledged: string;
  remainder: string;
  investors: number;
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
  user: User;
  project_teams: ProjectTeam[];
  project_team_members: ProjectTeamMember[];
  budget_items: BudgetItem[];
  project_milestones: ProjectMilestone[];
}

export interface Data {
  projects: Project;
}
