import { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import Button from './Button';
import ModalBox from './ModalBox';
import ModalNav from './ModalNav';

interface IProps {
  setIsReportModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function ReportProfileModal({ setIsReportModalOpen }: IProps) {
  const onModalClick = () => {
    setIsReportModalOpen(false);
  };

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const handleFormSubmit = () => {
    const { reportProfileReason } = getValues();
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <ModalBox>
          <ModalNav onClick={onModalClick} text="신고하기" />
          <div className="p-6">
            <form onSubmit={handleSubmit(handleFormSubmit)}>
              <div className="flex flex-col items-center mb-2 text-gray-600">
                <div className="my-2 w-full">
                  <label
                    htmlFor="reason1"
                    className="w-full py-2 text-sm sm:text-base"
                  >
                    <input
                      {...register('reportProfileReason')}
                      id="reason1"
                      type="radio"
                      value="비매너 사용자입니다."
                      name="report"
                      className="mr-3"
                    />
                    비매너 사용자입니다.
                  </label>
                </div>
                <div className="my-2 w-full">
                  <label
                    htmlFor="reason2"
                    className="w-full py-2 text-sm sm:text-base"
                  >
                    <input
                      {...register('reportProfileReason')}
                      id="reason2"
                      type="radio"
                      value="욕설을 합니다."
                      name="report"
                      className="mr-3"
                    />
                    욕설을 합니다.
                  </label>
                </div>
                <div className="my-2 w-full">
                  <label
                    htmlFor="reason3"
                    className="w-full py-2 text-sm sm:text-base"
                  >
                    <input
                      {...register('reportProfileReason')}
                      id="reason3"
                      type="radio"
                      value="성희롱을 합니다."
                      name="report"
                      className="mr-3"
                    />
                    성희롱을 합니다.
                  </label>
                </div>
                <div className="my-2 w-full">
                  <label
                    htmlFor="reason4"
                    className="w-full py-2 text-sm sm:text-base"
                  >
                    <input
                      {...register('reportProfileReason')}
                      id="reason4"
                      type="radio"
                      value="사기당했습니다."
                      name="report"
                      className="mr-3"
                    />
                    사기당했습니다.
                  </label>
                </div>
                <div className="my-2 w-full">
                  <label
                    htmlFor="reason5"
                    className="w-full py-2 text-sm sm:text-base"
                  >
                    <input
                      {...register('reportProfileReason')}
                      id="reason5"
                      type="radio"
                      value="정치, 종교 대화를 시도합니다."
                      name="report"
                      className="mr-3"
                    />
                    정치, 종교 대화를 시도합니다.
                  </label>
                </div>
                <div className="my-2 w-full">
                  <label
                    htmlFor="reason6"
                    className="w-full py-2 text-sm sm:text-base"
                  >
                    <input
                      {...register('reportProfileReason')}
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
            </form>
          </div>
        </ModalBox>
        <div
          onClick={() => setIsReportModalOpen(false)}
          className="fixed bg-gray-300 opacity-50 top-0 left-0 w-full h-full"
        ></div>
      </div>
    </div>
  );
}
