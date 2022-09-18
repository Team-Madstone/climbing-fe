import { gql, useLazyQuery, useReactiveVar } from '@apollo/client';
import { useEffect, useState } from 'react';
import {
  hasLoginTokenVar,
  isClientSideVar,
  loginUserVar,
  LOGIN_TOKEN,
} from '../apollo-store';
import { IGetMyProfileResult } from '../types/type';

const GET_MY_PROFILE_QUERY = gql`
  query getMyProfile {
    getMyProfileResult @rest(path: "my-profile") {
      status
      data
    }
  }
`;

const getLoginToken = () => localStorage.getItem(LOGIN_TOKEN);

const useMyProfile = () => {
  const isClientSide = useReactiveVar(isClientSideVar);
  const hasLoginToken = useReactiveVar(hasLoginTokenVar);
  const [isFetched, setIsFetched] = useState(false);
  const user = useReactiveVar(loginUserVar);
  const [getMyProfile] =
    useLazyQuery<IGetMyProfileResult>(GET_MY_PROFILE_QUERY);

  useEffect(() => {
    isClientSide &&
      hasLoginToken &&
      getMyProfile({
        fetchPolicy: 'no-cache',
        ...(isClientSide && {
          context: {
            headers: {
              authorization: `Bearer ${getLoginToken()}`,
            },
          },
        }),
        onCompleted: (data) => {
          console.log(data);
          loginUserVar(data?.getMyProfileResult?.data?.user);
          setIsFetched(true);
        },
      });
  }, [isClientSide, hasLoginToken, getMyProfile]);

  return {
    isClientSide,
    hasLoginToken,
    isFetched,
    user,
  };
};

export default useMyProfile;
