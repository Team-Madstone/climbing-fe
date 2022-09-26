import { useReactiveVar } from '@apollo/client';
import { BookmarkIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import { loginUserVar } from '../apollo-store';

export default function BookmarkBtn() {
  const loginUser = useReactiveVar(loginUserVar);
  const router = useRouter();

  const checkEmailVerified = () => {
    if (loginUser) {
      if (loginUser.email_verified_at) {
        // 북마크 기능
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
    <button onClick={checkEmailVerified} type="button">
      <BookmarkIcon className="w-6 h-6 text-gray-500 ml-2" />
    </button>
  );
}
