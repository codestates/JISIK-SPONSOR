// export interface Category {
//   name: string;
// }

// export interface User {
//   name: string;
//   nickname: string;
//   bio: string;
//   profile_url: string;
// }

// export interface ProjectTeam {
//   id: number;
//   team_name: string;
//   team_description: string;
//   profile_url: string;
// }

// export interface ProjectTeamMember {
//   id: number;
//   name: string;
//   bio: string;
// }

// export interface BudgetItem {
//   id: number;
//   title: string;
//   amount: number;
// }

// export interface ProjectMilestone {
//   id: number;
//   title: string;
//   goal_date: Date;
// }

// export interface Project {
//   id: number;
//   title: string;
//   path: string;
//   description: string;
//   thumbnail_url: string;
//   category_id: number;
//   term: number;
//   start_date: string;
//   end_date: string;
//   status: string;
//   goal: string;
//   pledged: string;
//   remainder: string;
//   investors: number;
//   comments: number;
//   wishes: number;
//   views: number;
//   project_background: string;
//   project_progress: string;
//   project_goals: string;
//   budget_synopsis: string;
//   milestone_description: string;
//   researcher_word: string;
//   created_at: Date;
//   updated_at: Date;
//   category: Category;
//   user: User;
//   project_teams: ProjectTeam[];
//   project_team_members: ProjectTeamMember[];
//   budget_items: BudgetItem[];
//   project_milestones: ProjectMilestone[];
// }

// export interface Data {
//   projects: Project;
// }

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

export interface FavState {
  state: boolean;
}

export interface Tag {
  id: number;
  name: string;
}

export interface Tags {
  tags: Tag[];
}

export interface Commentor {
  name: string;
  nickname: string;
  profile_url: string;
}

export interface Comment {
  id: number;
  user_id: number;
  project_id: number;
  content: string;
  created_at: Date;
  updated_at: Date;
  user: Commentor;
}

export interface CommentType {
  comments: Comment[];
}
