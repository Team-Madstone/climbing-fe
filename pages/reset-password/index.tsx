import { useMutation, useReactiveVar } from '@apollo/client';
import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { isClientSideVar, isServerError } from '../../apollo-store';
import GuestGuard from '../../components/GuestGuard';
import Layout from '../../components/Layout';
import queryString from 'query-string';
import { IResetPasswordResult } from '../../types/type';
import { RESET_PASSWORD_MUTATION } from '../../apollo-request';
import Button from '../../components/Button';
import Anchor from '../../components/Anchor';

interface FormInput {
  password: String;
}

const ResetPassword: NextPage = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { isValid, errors: formErrors },
  } = useForm<FormInput>({
    mode: 'onChange',
  });
  const [resetPasswordMutation, { loading, error: serverError }] =
    useMutation<IResetPasswordResult>(RESET_PASSWORD_MUTATION, {
      onError: (error) => undefined,
    });

  const isClientSide = useReactiveVar(isClientSideVar);
  const [token, setToken] = useState('');
  const [email, setEmail] = useState('');
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (isClientSide) {
      const location = window.location.search;
      const parsed = queryString.parse(location);
      const token = parsed.token;
      const email = parsed.email;

      setToken(token as string);
      setEmail(email as string);
    }
  }, [isClientSide]);

  const handleFormSubmit = () => {
    const { password } = getValues();
    !loading &&
      resetPasswordMutation({
        variables: {
          password,
          token,
          email,
        },
        onCompleted: () => {
          alert('비밀번호 재설정이 완료되었습니다.');
          setDisabled(true);
        },
      });
  };

  return (
    <Layout title="비밀번호 찾기" hasTabBar>
      <GuestGuard>
        <Head>
          <title>비밀번호 재설정하기</title>
        </Head>
        <div>
          <h2 className="text-2xl font-bold text-center text-gray-800">
            비밀번호 재설정하기
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
                    serverError.networkError.result?.message && (
                      <span className="text-sm text-red-600">
                        {serverError.networkError.result?.message}
                      </span>
                    )}
                </div>

                <div>
                  <Button
                    type="submit"
                    text={loading ? '요청중' : '비밀번호 재설정'}
                    disabled={loading || !isValid || disabled}
                    styling="fullBtn"
                  />
                </div>
                <div className="flex justify-center">
                  <Anchor href={'/login'} text="로그인" styling="textOnly" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </GuestGuard>
    </Layout>
  );
};
export default ResetPassword;
