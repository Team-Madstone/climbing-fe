import { useMutation } from '@apollo/client';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect } from 'react';
import Layout from '../../components/layout';
import { useForm, SubmitHandler } from 'react-hook-form';
import GuestGuard from '../../components/guestGuard';
import { IRegisterResult } from '../../types/type';
import { returnUrl } from '../../shared/constances';
import { handleLogin, isServerError } from '../../apollo-store';
import { REGISTER_MUTATION } from '../../apollo-request';

interface FormInput {
  email: String;
  password: String;
  name: String;
}

const Register: NextPage = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { isValid, errors: formErrors },
  } = useForm<FormInput>({
    mode: 'onChange',
  });

  const [registerMutation, { loading, error: serverError, data }] =
    useMutation<IRegisterResult>(REGISTER_MUTATION, {
      onError: (error) => undefined,
    });

  const handleFormSubmit: SubmitHandler<FormInput> = () => {
    const { email, password, name } = getValues();
    !loading &&
      registerMutation({
        variables: {
          email,
          password,
          name,
          returnUrl: returnUrl,
        },
      });
  };

  useEffect(() => {
    if (data?.registerResult?.token) {
      handleLogin(data.registerResult.token);
    }
  }, [data]);

  return (
    <Layout title="회원가입" hasTabBar>
      <GuestGuard>
        <Head>
          <title>회원가입</title>
        </Head>
        <div>
          <h2 className="text-2xl font-bold text-center text-gray-800">
            회원가입
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
                  {serverError &&
                    isServerError(serverError.networkError) &&
                    serverError.networkError.result.errors.email && (
                      <span className="text-sm text-red-600">
                        {serverError.networkError.result.errors.email}
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
                  {serverError &&
                    isServerError(serverError.networkError) &&
                    serverError.networkError.result.errors.password && (
                      <span className="text-sm text-red-600">
                        {serverError.networkError.result.errors.password}
                      </span>
                    )}
                </div>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    닉네임
                  </label>
                  <div className="mt-1">
                    <input
                      {...register('name', {
                        required: '닉네임은 필수 입력 사항입니다.',
                        minLength: {
                          value: 2,
                          message: '닉네임은 최소 2글자 이상 입니다.',
                        },
                        maxLength: {
                          value: 20,
                          message: '닉네임은 최대 20글자까지 가능합니다.',
                        },
                        pattern: {
                          value: /^[가-힣|a-z]+$/,
                          message: '한글 또는 영어 소문자만 입력 가능합니다.',
                        },
                      })}
                      id="name"
                      name="name"
                      type="name"
                      required
                      className="block w-full appearance-none rounded-sm border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  {formErrors.name?.message && (
                    <span className="text-sm text-red-600">
                      {formErrors.name?.message}
                    </span>
                  )}
                  {serverError &&
                    isServerError(serverError.networkError) &&
                    serverError.networkError.result.errors.name && (
                      <span className="text-sm text-red-600">
                        {serverError.networkError.result.errors.name}
                      </span>
                    )}
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-sm border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-indigo-200"
                    disabled={loading || !isValid}
                  >
                    {loading ? '요청중' : '회원가입'}
                  </button>
                </div>
                <div className="flex justify-center">
                  <Link href="/login">
                    <button className="text-sm text-gray-500 hover:text-gray-700">
                      로그인
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </GuestGuard>
    </Layout>
  );
};
export default Register;
