export interface LoginResponse {
  access: string;
}

export interface LoginResponseWithUser {
  access: string;
  user: User;
}

export interface ResetPasswordParams {
  userId: string;
  token: string;
  formData: FormData;
}

export interface LoginErrorResponse {
  detail: string;
}

interface Permission {
  name: string;
  codename: string;
}
export interface User {
  id: number;
  username: string;
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  image: string | null;
  date_joined: Date;
  is_admin?: boolean;
  permissions: Permission[];
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
  signupFormErrors: {
    username?: string[];
    email?: string[];
    password?: string[];
    confirm_password?: string[];
    image?: string[];
    first_name?: string[];
    last_name?: string[];
  };
  resetFormErrors: {
    detail?: string;
    new_password?: string[];
    confirm_password?: string[];
  };
}
