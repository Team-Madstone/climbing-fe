export interface IUser {
  created_at: string;
  email: string;
  email_verified_at: string;
  name: string;
  updated_at: string;
}

export interface IGetMyProfileResult {
  getMyProfileResult: {
    data: {
      user: IUser;
    };
  };
}

export interface ILoginResult {
  loginResult: {
    status: boolean;
    message: string;
    token?: string;
  };
}

export interface IRegisterResult {
  registerResult: {
    status: string;
    message: string;
    token?: string;
  };
}

export interface IForgotPasswordResult {
  forgotPasswordResult: {
    status: boolean;
    message: string;
  };
}

export interface IResetPasswordResult {
  resetPasswordResult: {
    status: boolean;
    message: string;
    errors: string;
  };
}

export interface IUpdateProfileResult {
  updateProfileResult: {
    status: boolean;
    message: string;
    errors: string;
  };
}
