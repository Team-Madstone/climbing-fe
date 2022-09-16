import { gql, useMutation, useReactiveVar } from '@apollo/client';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import {
  isClientSide,
  isLoginVar,
  isServerError,
  LOGIN_TOKEN,
} from '../apollo-store';
import Layout from '../components/layout';

const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    loginResult(input: { email: $email, password: $password })
      @rest(method: "POST", path: "login") {
      status
      message
      token
    }
  }
`;

const Login: NextPage = () => {
  const router = useRouter();
  const isLogin = useReactiveVar(isLoginVar);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);

  const handleLogin = (token: string) => {
    isClientSide && localStorage.setItem(LOGIN_TOKEN, token);
    isLoginVar(true);
  };

  const handleLogout = () => {
    isClientSide && localStorage.removeItem(LOGIN_TOKEN);
    isLoginVar(false);
  };

  const [loginMutaion, { loading, error, data }] = useMutation(LOGIN_MUTATION, {
    onError: (error) => {
      const networkError = error.networkError;
      isServerError(networkError) && console.log(networkError.result);
      if (isServerError(networkError) && networkError.result.status === false) {
        setIsError(true);
      }
    },
    onCompleted: (data) => {
      console.log(data, 'data');
      router.push('/');
    },
  });

  useEffect(() => {
    if (data?.loginResult?.token) {
      console.log(data, 'data');
      handleLogin(data.loginResult.token);
    }
  }, [data]);

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setEmail(value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setPassword(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginMutaion({
      variables: {
        email,
        password,
      },
    });
  };

  return (
    <Layout title="로그인" hasTabBar>
      <Head>
        <title>로그인</title>
      </Head>
      <div>
        <h2 className="text-2xl font-bold text-center text-gray-800">로그인</h2>
        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white p-4 sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  이메일
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={handleChangeEmail}
                    required
                    className="block w-full appearance-none rounded-sm border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  비밀번호
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={handleChangePassword}
                    required
                    className="block w-full appearance-none rounded-sm border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-sm border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  로그인
                </button>
              </div>
              <div className="flex justify-center">
                <Link href="/register">
                  <button className="text-sm text-gray-600 py-2 px-4 border border-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-sm w-full">
                    회원가입
                  </button>
                </Link>
              </div>
              <div className="flex justify-center">
                <Link href="/register">
                  <button className="text-sm text-gray-500 hover:text-gray-700">
                    비밀번호 찾기
                  </button>
                </Link>
              </div>
              {isError && (
                <p className="text-red-600 text-sm">
                  {error &&
                    isServerError(error.networkError) &&
                    error.networkError.result.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
