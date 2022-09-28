import { useLazyQuery, useReactiveVar } from '@apollo/client';
import { useEffect, useState } from 'react';
import { GET_MY_PROFILE_QUERY } from '../apollo-request';
import {
  hasLoginTokenVar,
  isClientSideVar,
  loginUserVar,
  LOGIN_TOKEN,
} from '../apollo-store';
import { IGetMyProfileResult } from '../types/type';

const getLoginToken = () => localStorage.getItem(LOGIN_TOKEN);

const useMyProfile = () => {
  const isClientSide = useReactiveVar(isClientSideVar);
  const hasLoginToken = useReactiveVar(hasLoginTokenVar);
  const [isFetched, setIsFetched] = useState(false);
  const user = useReactiveVar(loginUserVar);
  const [getMyProfile, { refetch }] = useLazyQuery<IGetMyProfileResult>(
    GET_MY_PROFILE_QUERY,
    {
      fetchPolicy: 'cache-and-network',
      ...(isClientSide && {
        context: {
          headers: {
            authorization: `Bearer ${getLoginToken()}`,
          },
        },
      }),
      onCompleted: (data) => {
        loginUserVar(data?.getMyProfileResult?.data?.user);
        setIsFetched(true);
      },
    }
  );

  useEffect(() => {
    isClientSide && hasLoginToken && getMyProfile();
  }, [isClientSide, hasLoginToken, getMyProfile]);

  return {
    isClientSide,
    hasLoginToken,
    isFetched,
    user,
    refetch,
  };
};

export default useMyProfile;
