import { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import AuthGuard from './AuthGuard';
import Button from './Button';
import ModalBox from './ModalBox';
import ModalNav from './ModalNav';

interface IProps {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function ReportMeetupModal({ setIsModalOpen }: IProps) {
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
    const { reportMeetupReason } = getValues();
  };
  return (
    <AuthGuard>
      <div>
        <div className="flex justify-center items-center">
          <ModalBox>
            <ModalNav onClick={onModalClick} text="동행 모집 신고하기" />
            <div className="p-6">
              <div className="flex flex-col items-center mb-2 text-gray-600">
                <div className="my-2 w-full">
                  <label
                    htmlFor="reason1"
                    className="w-full py-2 text-sm sm:text-base"
                  >
                    <input
                      {...register('reportMeetupReason')}
                      id="reason1"
                      type="radio"
                      value="부적절한 모임입니다."
                      name="report"
                      className="mr-3"
                    />
                    부적절한 모임입니다.
                  </label>
                </div>
                <div className="my-2 w-full">
                  <label
                    htmlFor="reason2"
                    className="w-full py-2 text-sm sm:text-base"
                  >
                    <input
                      {...register('reportMeetupReason')}
                      id="reason2"
                      type="radio"
                      value="광고 / 홍보 글입니다."
                      name="report"
                      className="mr-3"
                    />
                    광고 / 홍보 글입니다.
                  </label>
                </div>
                <div className="my-2 w-full">
                  <label
                    htmlFor="reason3"
                    className="w-full py-2 text-sm sm:text-base"
                  >
                    <input
                      {...register('reportMeetupReason')}
                      id="reason3"
                      type="radio"
                      value="중복, 도배성 글입니다."
                      name="report"
                      className="mr-3"
                    />
                    중복, 도배성 글입니다.
                  </label>
                </div>
                <div className="my-2 w-full">
                  <label
                    htmlFor="reason4"
                    className="w-full py-2 text-sm sm:text-base"
                  >
                    <input
                      {...register('reportMeetupReason')}
                      id="reason4"
                      type="radio"
                      value="비방하는 글입니다."
                      name="report"
                      className="mr-3"
                    />
                    비방하는 글입니다.
                  </label>
                </div>
                <div className="my-2 w-full">
                  <label
                    htmlFor="reason5"
                    className="w-full py-2 text-sm sm:text-base"
                  >
                    <input
                      {...register('reportMeetupReason')}
                      id="reason5"
                      type="radio"
                      value="관련 없는 글입니다."
                      name="report"
                      className="mr-3"
                    />
                    관련 없는 글입니다.
                  </label>
                </div>
                <div className="my-2 w-full">
                  <label
                    htmlFor="reason6"
                    className="w-full py-2 text-sm sm:text-base"
                  >
                    <input
                      {...register('reportMeetupReason')}
                      id="reason6"
                      type="radio"
                      value="기타"
                      name="report"
                      className="mr-3"
                    />
                    기타
                    <div className="ml-6">
                      <textarea
                        rows={4}
                        className="block mt-3 w-full border-gray-400"
                      />
                    </div>
                  </label>
                </div>
              </div>
              <div className="flex justify-end">
                <Button text="신고하기" />
              </div>
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
