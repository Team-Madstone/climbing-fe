import { useMutation, useReactiveVar } from '@apollo/client';
import { PlusIcon } from '@heroicons/react/24/outline';
import { useForm } from 'react-hook-form';
import { UPDATE_PROFILE_MUTATION } from '../apollo-request';
import { isClientSideVar, isServerError, LOGIN_TOKEN } from '../apollo-store';
import useMyProfile from '../hooks/useMyProfile';
import { IUpdateProfileResult } from '../types/type';
import Button from './Button';
import ModalBox from './ModalBox';
import ModalNav from './ModalNav';

interface FormInput {
  password: String;
  name: String;
  token: String;
}

interface IProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function UpdateProfileModal({ setIsModalOpen }: IProps) {
  const onModalClick = () => {
    setIsModalOpen(false);
  };

  const {
    register,
    handleSubmit,
    getValues,
    formState: { isValid, errors: formErrors },
  } = useForm<FormInput>({
    mode: 'onChange',
  });

  const [updateProfileMutation, { loading, error: serverError }] =
    useMutation<IUpdateProfileResult>(UPDATE_PROFILE_MUTATION, {
      onError: (error) => undefined,
      onCompleted: () => {
        alert('프로필 변경이 완료되었습니다.');
      },
    });

  const { user } = useMyProfile();
  const { refetch } = useMyProfile();
  const isClientSide = useReactiveVar(isClientSideVar);
  const getLoginToken = () => localStorage.getItem(LOGIN_TOKEN);

  const handleFormSubmit = () => {
    const { name, password } = getValues();
    !loading &&
      updateProfileMutation({
        variables: {
          name,
          password: password.length > 0 ? password : undefined,
        },
        ...(isClientSide && {
          context: {
            headers: {
              authorization: `Bearer ${getLoginToken()}`,
            },
          },
        }),
        onCompleted: () => {
          setIsModalOpen(false);
          refetch();
        },
      });
  };

  return (
    <div className="flex justify-center">
      <ModalBox>
        <ModalNav onClick={onModalClick} text="프로필 수정" />
        <div>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="flex justify-center w-full">
              <div className="relative inline-block mt-6">
                <span className="block w-24 h-24 bg-gray-200 rounded-full mx-auto"></span>
                <div className="absolute top-0 right-0 bg-white border border-gray-500 p-1 rounded-full cursor-pointer">
                  <PlusIcon className="w-4 h-4 text-gray-600 stroke-2" />
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-3">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  닉네임
                </label>
                <input
                  {...register('name', {
                    required: '닉네임은 필수 입력 사항입니다.',
                    minLength: {
                      value: 2,
                      message: '닉네임은 최소 2글자 이상 입니다.',
                    },
                    maxLength: {
                      value: 20,
                      message: '닉네임은 최대 20글자까지 가능합니다.',
                    },
                    pattern: {
                      value: /^[가-힣|a-z]+$/,
                      message: '한글 또는 영어 소문자만 입력 가능합니다.',
                    },
                  })}
                  type="text"
                  id="name"
                  name="name"
                  defaultValue={user?.name}
                  className="mt-1 block w-full rounded-sm border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                {formErrors.name?.message && (
                  <span className="text-sm text-red-600">
                    {formErrors.name?.message}
                  </span>
                )}
                {serverError &&
                  isServerError(serverError.networkError) &&
                  serverError.networkError.result.errors.name && (
                    <span className="text-sm text-red-600">
                      {serverError.networkError.result.errors.name}
                    </span>
                  )}
              </div>
              <div className="mb-3">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  비밀번호
                </label>
                <input
                  {...register('password', {
                    minLength: {
                      value: 8,
                      message: '비밀번호는 최소 8자 이상입니다.',
                    },
                  })}
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 block w-full rounded-sm border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                {formErrors.password?.message && (
                  <span className="text-sm text-red-600">
                    {formErrors.password?.message}
                  </span>
                )}
                {serverError &&
                  isServerError(serverError.networkError) &&
                  serverError.networkError.result.errors.password && (
                    <span className="text-sm text-red-600">
                      {serverError.networkError.result.errors.password}
                    </span>
                  )}
              </div>
              <div className="flex justify-end pt-2">
                <Button type="submit" text="저장" />
              </div>
            </div>
          </form>
        </div>
      </ModalBox>
      <div
        onClick={() => setIsModalOpen(false)}
        className="fixed bg-gray-300 opacity-50 top-0 left-0 w-full h-full"
      ></div>
    </div>
  );
}
