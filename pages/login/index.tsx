import { useMutation } from '@apollo/client';
import { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { handleLogin, isServerError } from '../../apollo-store';
import Layout from '../../components/Layout';
import { useForm, SubmitHandler } from 'react-hook-form';
import GuestGuard from '../../components/GuestGuard';
import { ILoginResult } from '../../types/type';
import { LOGIN_MUTATION } from '../../apollo-request';
import Button from '../../components/Button';
import Anchor from '../../components/Anchor';

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
                  <Button
                    styling={'fullBtn'}
                    type="submit"
                    text={loading ? '로딩중' : '로그인'}
                    disabled={loading || !isValid}
                  />
                </div>
                <div className="flex justify-center">
                  <Anchor
                    href={'register'}
                    text="회원가입"
                    styling="fullLightBtn"
                  />
                </div>
                <div className="flex justify-center">
                  <Anchor
                    styling="textOnly"
                    href={'/forgot-password'}
                    text="비밀번호 찾기"
                  />
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
