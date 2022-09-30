import { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import AuthGuard from './AuthGuard';
import Button from './Button';
import ModalBox from './ModalBox';
import ModalNav from './ModalNav';

interface IProps {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function ReportGymModal({ setIsModalOpen }: IProps) {
  console.log({ setIsModalOpen });
  const onModalClick = () => {
    setIsModalOpen(false);
  };

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const handleFormSubmit = () => {
    const { reportGymReason } = getValues();
  };

  return (
    <AuthGuard>
      <div>
        <div className="flex justify-center">
          <ModalBox>
            <ModalNav onClick={onModalClick} text="잘못된 정보 신고하기" />
            <div className="p-6">
              <form onSubmit={handleSubmit(handleFormSubmit)}>
                <div className="flex flex-col items-center mb-4">
                  <div className=" w-full">
                    <p className="text-sm sm:text-base text-gray-600">
                      잘못된 정보를 알려주세요
                    </p>
                    <textarea
                      {...register('reportGymReason')}
                      rows={4}
                      className="block mt-4 w-full border-gray-400"
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button text="신고하기" />
                </div>
              </form>
            </div>
          </ModalBox>
          <div
            onClick={() => setIsModalOpen(false)}
            className="fixed bg-gray-300 opacity-50 top-0 left-0 w-full h-full"
          ></div>
        </div>
      </div>
    </AuthGuard>
  );
}
