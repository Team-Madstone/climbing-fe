import { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import AuthGuard from './AuthGuard';
import Button from './Button';
import ModalBox from './ModalBox';
import ModalNav from './ModalNav';

interface IProps {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function ReportDealModal({ setIsModalOpen }: IProps) {
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
    const { reportDealReason } = getValues();
  };

  return (
    <AuthGuard>
      <div>
        <div className="flex justify-center">
          <ModalBox>
            <ModalNav onClick={onModalClick} text="중고 거래 신고하기" />
            <div className="p-6">
              <form onSubmit={handleSubmit(handleFormSubmit)}>
                <div className="flex flex-col items-center mb-2 text-gray-600">
                  <div className="my-2 w-full">
                    <label
                      htmlFor="reason1"
                      className="w-full py-2 text-sm sm:text-base"
                    >
                      <input
                        {...register('reportDealReason')}
                        id="reason1"
                        type="radio"
                        name="report"
                        value="판매 금지 물품입니다."
                        className="mr-3"
                      />
                      판매 금지 물품입니다.
                    </label>
                  </div>
                  <div className="my-2 w-full">
                    <label
                      htmlFor="reason2"
                      className="w-full py-2 text-sm sm:text-base"
                    >
                      <input
                        {...register('reportDealReason')}
                        id="reason2"
                        type="radio"
                        name="report"
                        value="전문 판매업자의 글입니다."
                        className="mr-3"
                      />
                      전문 판매업자의 글입니다.
                    </label>
                  </div>
                  <div className="my-2 w-full">
                    <label
                      htmlFor="reason3"
                      className="w-full py-2 text-sm sm:text-base"
                    >
                      <input
                        {...register('reportDealReason')}
                        id="reason3"
                        type="radio"
                        name="report"
                        value="중복, 도배성 글입니다."
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
                        {...register('reportDealReason')}
                        id="reason4"
                        type="radio"
                        name="report"
                        value="비방하는 글입니다."
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
                        {...register('reportDealReason')}
                        id="reason5"
                        type="radio"
                        name="report"
                        value="광고, 홍보 글입니다."
                        className="mr-3"
                      />
                      광고, 홍보 글입니다.
                    </label>
                  </div>
                  <div className="my-2 w-full">
                    <label
                      htmlFor="reason6"
                      className="w-full py-2 text-sm sm:text-base"
                    >
                      <input
                        {...register('reportDealReason')}
                        id="reason6"
                        type="radio"
                        name="report"
                        value="기타"
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
            onClick={() => setIsModalOpen(false)}
            className="fixed bg-gray-300 opacity-50 top-0 left-0 w-full h-full"
          ></div>
        </div>
      </div>
    </AuthGuard>
  );
}
