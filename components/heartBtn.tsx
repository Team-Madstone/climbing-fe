import { useReactiveVar } from '@apollo/client';
import { HeartIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import { loginUserVar } from '../apollo-store';

interface HeartBtnProps {
  likes: number;
}

export default function HeartBtn({ likes }: HeartBtnProps) {
  const loginUser = useReactiveVar(loginUserVar);
  const router = useRouter();

  const checkEmailVerified = () => {
    if (loginUser) {
      if (loginUser.email_verified_at) {
        // 좋아요 기능
        return;
      } else {
        router.push('/check-verify-email');
        return;
      }
    } else {
      router.push('/login');
      return;
    }
  };

  return (
    <div className="flex">
      <button
        onClick={checkEmailVerified}
        type="button"
        className="flex items-center text-gray-500"
      >
        <HeartIcon className="w-6 h-6 mr-1" />
      </button>
      <span className="cursor-default text-gray-500">{likes}</span>
    </div>
  );
}
