import { NextPage } from 'next';
import Link from 'next/link';

const CheckVerifyEmail: NextPage = () => {
  return (
    <div className="my-28 mx-auto max-w-[640px]">
      <p className="text-2xl text-bold">이메일 인증이 필요합니다.</p>
      <p className="mt-4">
        해당 서비스는 이메일 인증이 완료된 후 사용할 수 있습니다.
        <br />
        가입한 이메일로 인증을 완료해주세요.
      </p>
      <Link href={'/'}>
        <span className="inline-block bg-indigo-600 px-5 py-3 rounded-sm text-sm text-white mt-16">
          홈으로 가기
        </span>
      </Link>
      <button className="inline-block bg-indigo-600 px-5 py-3 rounded-sm text-sm text-white mt-16 ml-2">
        이메일 재전송
      </button>
    </div>
  );
};

export default CheckVerifyEmail;
