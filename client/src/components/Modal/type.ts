export interface UserInfo {
  id: number;
  name: string;
  email: string;
  mobile: string;
  nicknamez: string;
  bio: string;
  profile_url: string;
  signup_method: string;
  projects_supported: number;
  total_amount: string;
  email_verified: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface UserInfoData {
  userInfo: UserInfo;
}
