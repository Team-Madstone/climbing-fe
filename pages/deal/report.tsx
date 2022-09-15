import { NextPage } from 'next';
import Head from 'next/head';
import BackBtn from '../../components/backBtn';
import Button from '../../components/button';
import Layout from '../../components/layout';

const Report: NextPage = () => {
  return (
    <Layout title="중고 거래 | 신고하기" hasTabBar>
      <Head>
        <title>중고 거래 | 신고하기</title>
      </Head>
      <div>
        <div className="flex pb-4 border-b">
          <BackBtn />
          <h3 className="ml-4">중고 거래 신고하기</h3>
        </div>
        <div className="p-4">
          <div className="flex flex-col items-center mb-2">
            <label className="w-full py-2 text-sm sm:text-base">
              <input type="radio" className="mr-3" />
              판매 금지 물품입니다.
            </label>
            <label className="w-full py-2 text-sm sm:text-base">
              <input type="radio" className="mr-3" />
              전문 판매업자의 글입니다.
            </label>
            <label className="w-full py-2 text-sm sm:text-base">
              <input type="radio" className="mr-3" />
              중복, 도배성 글입니다.
            </label>
            <label className="w-full py-2 text-sm sm:text-base">
              <input type="radio" className="mr-3" />
              광고, 홍보 글입니다.
            </label>
            <label className="w-full py-2 text-sm sm:text-base">
              <input type="radio" className="mr-3" />
              비방하는 글입니다.
            </label>
            <label className="w-full py-2 text-sm sm:text-base">
              <input type="radio" className="mr-3" />
              기타
              <div className="ml-6">
                <textarea rows={4} className="block mt-2 w-full" />
              </div>
            </label>
          </div>
          <div className="flex justify-end">
            <Button text="신고하기" />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Report;
