import { makeVar, ServerError, ServerParseError } from '@apollo/client';

export const LOGIN_TOKEN = 'login_token';

export const isClientSide = typeof window !== 'undefined';

export const isLoginVar = makeVar(
  isClientSide && Boolean(localStorage.getItem(LOGIN_TOKEN))
);

export const handleLogin = (token: string) => {
  isClientSide && localStorage.setItem(LOGIN_TOKEN, token);
  isLoginVar(true);
};

export const handleLogout = () => {
  isClientSide && localStorage.removeItem(LOGIN_TOKEN);
  isLoginVar(false);
};

export const isServerError = (
  error: Error | ServerParseError | ServerError | null
): error is ServerError => {
  const _error = error as ServerError;

  return !!_error.result;
};
