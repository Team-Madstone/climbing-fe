import { NextPage } from 'next';
import Link from 'next/link';

const VerifyEmail: NextPage = () => {
  return (
    <div className="max-w-[640px] mx-auto px-4 py-28 sm:px-0">
      <p className="text-2xl text-bold">회원가입 완료</p>
      <p className="mt-4">
        회원가입이 완료되었습니다.
        <br />
        가입한 이메일로 인증을 완료해주세요.
      </p>
      <Link href={'/'}>
        <span className="inline-block bg-indigo-600 px-5 py-3 rounded-sm text-sm text-white mt-16">
          홈으로 가기
        </span>
      </Link>
    </div>
  );
};

export default VerifyEmail;
