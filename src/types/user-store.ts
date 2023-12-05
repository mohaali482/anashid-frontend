export interface LoginResponse {
  access: string;
}

export interface LoginErrorResponse {
  detail: string;
}

export interface User {
  id: number;
  username: string;
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  image: string | null;
  date_joined: Date;
}

export interface UserState {
  user: User | null;
  accessToken: string | null;
  isLoggedIn: boolean;
  error: string | null | Object;
  loading: boolean;
  passwordChangeFormErrors: {
    current_password?: string[];
    password?: string[];
    confirm_password?: string[];
  };
  updateFormErrors: {
    username?: string[];
    email?: string[];
    image?: string[];
  };
  deleteAccountErrors: {
    username?: string[];
    password?: string[];
  };
}
