import { NextPage } from 'next';
import Head from 'next/head';
import AuthGuard from '../../components/authGuard';
import BackBtn from '../../components/backBtn';
import Button from '../../components/button';
import Layout from '../../components/layout';

const Write: NextPage = () => {
  return (
    <Layout title="동행 모집" hasTabBar>
      <AuthGuard>
        <Head>
          <title>동행 모집 | 글쓰기</title>
        </Head>
        <div>
          <form>
            <div className="flex border-b items-center pb-4">
              <BackBtn />
              <h2 className="text-lg ml-2 text-gray-700 font-medium">
                동행 모집 글쓰기
              </h2>
            </div>
            <div className="bg-white py-6 px-2">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    제목
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className="mt-1 block w-full rounded-sm border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="contents"
                    className="block text-sm font-medium text-gray-700"
                  >
                    내용
                  </label>
                  <textarea
                    name="contents"
                    id="contents"
                    rows={4}
                    className="mt-1 block w-full rounded-sm border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-700"
                  >
                    날짜
                  </label>
                  <select
                    id="date"
                    name="date"
                    className="mt-1 block w-full rounded-sm border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="time"
                    className="block text-sm font-medium text-gray-700"
                  >
                    시간
                  </label>
                  <select
                    id="time"
                    name="time"
                    className="mt-1 block w-full rounded-sm border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="place"
                    className="block text-sm font-medium text-gray-700"
                  >
                    장소
                  </label>
                  <input
                    type="text"
                    name="place"
                    id="place"
                    className="mt-1 block w-full rounded-sm border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="members"
                    className="block text-sm font-medium text-gray-700"
                  >
                    인원
                  </label>
                  <select
                    id="members"
                    name="members"
                    className="mt-1 block w-full rounded-sm border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <Button text="저장" />
            </div>
          </form>
        </div>
      </AuthGuard>
    </Layout>
  );
};
export default Write;
