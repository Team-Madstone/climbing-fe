import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useMyProfile from '../hooks/useMyProfile';
import Loading from './loading';

interface IProps {
  children: React.ReactNode;
}

export default function GuestGuard({ children }: IProps) {
  const router = useRouter();
  const { isClientSide, hasLoginToken, user, isFetched } = useMyProfile();
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (!isClientSide) return;

    if (hasLoginToken) {
      if (isFetched) {
        if (user && !user.email_verified_at) {
          router.push('/verify-email');
          return;
        } else {
          router.push('/');
          return;
        }
      } else {
        return;
      }
    }
    setInit(true);
  }, [isClientSide, user, isFetched, router, hasLoginToken]);

  return !init ? <Loading /> : <>{children}</>;
}
