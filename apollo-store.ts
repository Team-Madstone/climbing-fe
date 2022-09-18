import { makeVar, ServerError, ServerParseError } from '@apollo/client';
import { IUser } from './types/type';

export const LOGIN_TOKEN = 'login_token';

export const isClientSideVar = makeVar(typeof window !== 'undefined');

export const loginUserVar = makeVar<IUser | undefined>(undefined);

export const hasLoginTokenVar = makeVar(
  isClientSideVar() && Boolean(localStorage.getItem(LOGIN_TOKEN))
);

export const handleLogin = (token: string) => {
  isClientSideVar() && localStorage.setItem(LOGIN_TOKEN, token);
  hasLoginTokenVar(true);
};

export const handleLogout = () => {
  isClientSideVar() && localStorage.removeItem(LOGIN_TOKEN);
  hasLoginTokenVar(false);
  loginUserVar(undefined);
};

export const isServerError = (
  error: Error | ServerParseError | ServerError | null
): error is ServerError => {
  const _error = error as ServerError;

  return !!_error.result;
};
