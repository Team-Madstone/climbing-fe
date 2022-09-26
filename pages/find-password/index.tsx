import { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../../components/layout';
import { useForm, SubmitHandler } from 'react-hook-form';
import { gql, useMutation } from '@apollo/client';
import Link from 'next/link';
import { isServerError } from '../../apollo-store';
import { IForgotPasswordResult } from '../../types/type';
import { returnUrl } from '../../shared/constances';
import GuestGuard from '../../components/guestGuard';

const FORGOT_PASSWORD_MUTATION = gql`
  mutation forgotPassword($email: String!, $returnUrl: String!) {
    forgotPasswordResult(input: { email: $email, returnUrl: $returnUrl })
      @rest(method: "POST", path: "forgot-password") {
      status
      message
    }
  }
`;

interface FormInput {
  email: String;
  returnUrl: String;
}

const FindPassword: NextPage = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { isValid, errors: formErrors },
  } = useForm<FormInput>({
    mode: 'onChange',
  });

  const [forgotPasswordMutation, { loading, error: serverError }] =
    useMutation<IForgotPasswordResult>(FORGOT_PASSWORD_MUTATION, {
      onError: (error) => undefined,
    });

  const handleFormSubmit: SubmitHandler<FormInput> = () => {
    const { email } = getValues();
    !loading &&
      forgotPasswordMutation({
        variables: {
          email,
          returnUrl: returnUrl,
        },
      });
  };

  return (
    <Layout title="비밀번호 찾기" hasTabBar>
      <GuestGuard>
        <Head>
          <title>비밀번호 찾기</title>
        </Head>
        <div>
          <h2 className="text-2xl font-bold text-center text-gray-800">
            비밀번호 찾기
          </h2>
          <p className="text-sm mt-4 text-gray-500 px-4 sm:px-32">
            비밀번호를 잊으셨나요? 아래에 입력한 이메일 주소로 비밀번호 재설정
            링크를 보내드립니다.
          </p>
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
                    serverError.networkError.result?.message && (
                      <span className="text-sm text-red-600">
                        {serverError.networkError.result?.message}
                      </span>
                    )}
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-sm border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-indigo-200"
                    disabled={loading || !isValid}
                  >
                    {loading ? '요청중' : '비밀번호 재설정 링크 전송'}
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

export default FindPassword;
