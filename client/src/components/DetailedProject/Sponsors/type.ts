export interface User {
  name: string;
  nickname: string;
  bio: string;
  profile_url: string;
}

export interface Row {
  id: number;
  user_id: number;
  project_id: number;
  pledged: string;
  status: string;
  created_at: Date;
  updated_at: Date;
  user: User;
}

export interface Sponsors {
  count: number;
  rows: Row[];
}

export interface RootObject {
  sponsors: Sponsors;
}
