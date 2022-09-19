import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useMyProfile from '../hooks/useMyProfile';
import Loading from './loading';

interface IProps {
  children: React.ReactNode;
}

export default function AuthGuard({ children }: IProps) {
  const router = useRouter();
  const { isClientSide, hasLoginToken, user, isFetched } = useMyProfile();
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (!isClientSide) return;
    if (hasLoginToken) {
      if (isFetched) {
        if (user) {
          if (!user.email_verified_at) {
            router.push('/check-verify-email');
            return;
          } else {
            setInit(true);
            return;
          }
        } else {
          router.push('/login');
          return;
        }
      } else {
        return;
      }
    }
    router.push('/login');
  }, [isClientSide, user, isFetched, router, hasLoginToken]);

  return !init ? <Loading /> : <>{children}</>;
}
