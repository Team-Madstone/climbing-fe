import { gql, useMutation, useReactiveVar } from '@apollo/client';
import { NextPage } from 'next';
import Link from 'next/link';
import {
  hasLoginTokenVar,
  isClientSideVar,
  LOGIN_TOKEN,
} from '../../apollo-store';
import { returnUrl } from '../../shared/constances';

const EMAIL_VERIFICATION_MUTATION = gql`
  mutation emailVerification($returnUrl: String!) {
    emailVerificationResult(input: { returnUrl: $returnUrl })
      @rest(method: "POST", path: "email-verification") {
      status
      message
    }
  }
`;

const CheckVerifyEmail: NextPage = () => {
  const isClientSide = useReactiveVar(isClientSideVar);
  const hasLoginToken = useReactiveVar(hasLoginTokenVar);
  const getLoginToken = () => localStorage.getItem(LOGIN_TOKEN);
  const [emailVerificationMutation, { loading, data, error }] = useMutation(
    EMAIL_VERIFICATION_MUTATION,
    {
      onError: (error) => undefined,
    }
  );

  const emailVerifiedClick = () => {
    isClientSide &&
      hasLoginToken &&
      emailVerificationMutation({
        variables: {
          returnUrl: returnUrl,
        },
        fetchPolicy: 'network-only',
        ...(isClientSide && {
          context: {
            headers: {
              authorization: `Bearer ${getLoginToken()}`,
            },
          },
        }),
      });
  };

  return (
    <div className="max-w-[640px] mx-auto px-4 py-28 sm:px-0">
      <p className="text-2xl text-bold">이메일 인증이 필요합니다.</p>
      <p className="mt-4">
        해당 서비스는 이메일 인증이 완료된 후 사용할 수 있습니다.
        <br />
        가입한 이메일로 인증을 완료해주세요.
      </p>
      <Link href={'/'}>
        <span className="inline-block bg-indigo-600 px-5 py-3 rounded-sm text-sm text-white mt-16 cursor-pointer">
          홈으로 가기
        </span>
      </Link>
      <button
        type="button"
        onClick={emailVerifiedClick}
        className="inline-block bg-indigo-600 px-5 py-3 rounded-sm text-sm text-white mt-16 ml-2 disabled:bg-indigo-200"
        disabled={loading}
      >
        이메일 재전송
      </button>
    </div>
  );
};

export default CheckVerifyEmail;
