import { gql, useMutation } from '@apollo/client';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { handleLogin, isServerError } from '../apollo-store';
import Layout from '../components/layout';
import { useForm, SubmitHandler } from 'react-hook-form';
import GuestGuard from '../components/guestGuard';
import { ILoginResult } from '../types/type';

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

interface FormInput {
  email: String;
  password: String;
}

const Login: NextPage = () => {
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { isValid, errors: formErrors },
  } = useForm<FormInput>({
    mode: 'onChange',
  });
  const [loginMutaion, { loading, data, error, reset }] =
    useMutation<ILoginResult>(LOGIN_MUTATION, {
      onError: (error) => undefined,
    });

  useEffect(() => {
    if (data?.loginResult?.token) {
      handleLogin(data.loginResult.token);
    }
  }, [data]);

  const email = watch('email');
  const password = watch('password');

  useEffect(() => {
    reset();
  }, [email, password, reset]);

  const handleFormSubmit: SubmitHandler<FormInput> = () => {
    const { email, password } = getValues();
    !loading &&
      loginMutaion({
        variables: {
          email,
          password,
        },
      });
  };

  return (
    <Layout title="로그인" hasTabBar>
      <GuestGuard>
        <Head>
          <title>로그인</title>
        </Head>
        <div>
          <h2 className="text-2xl font-bold text-center text-gray-800">
            로그인
          </h2>
          <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white p-4 sm:px-10">
              <form
                className="space-y-6"
                onSubmit={handleSubmit(handleFormSubmit)}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    이메일
                  </label>
                  <div className="mt-1">
                    <input
                      {...register('email', {
                        required: '이메일은 필수 입력 사항입니다.',
                        pattern: {
                          value:
                            /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                          message: '이메일의 형식이 올바르지 않습니다.',
                        },
                      })}
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="block w-full appearance-none rounded-sm border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  {formErrors.email?.message && (
                    <span className="text-sm text-red-600">
                      {formErrors.email?.message}
                    </span>
                  )}
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
                      {...register('password', {
                        required: '비밀번호는 필수 입력 사항입니다.',
                        minLength: {
                          value: 8,
                          message: '비밀번호는 최소 8자 이상입니다.',
                        },
                      })}
                      id="password"
                      name="password"
                      type="password"
                      required
                      className="block w-full appearance-none rounded-sm border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  {formErrors.password?.message && (
                    <span className="text-sm text-red-600">
                      {formErrors.password?.message}
                    </span>
                  )}
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-sm border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-indigo-200"
                    disabled={loading || !isValid}
                  >
                    {loading ? '로딩중' : '로그인'}
                  </button>
                </div>
                <div className="flex justify-center">
                  <Link href="/register">
                    <button className="text-sm text-gray-600 py-2 px-4 border bg-indigo-50 hover:bg-indigo-100 rounded-sm w-full">
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
                {error && (
                  <p className="text-red-600 text-sm">
                    {isServerError(error.networkError) &&
                      error.networkError.result.message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </GuestGuard>
    </Layout>
  );
};

export default Login;
