import { NextPage } from 'next';
import Head from 'next/head';
import AuthGuard from '../../components/authGuard';
import BackBtn from '../../components/backBtn';
import Button from '../../components/button';
import Layout from '../../components/layout';

const Write: NextPage = () => {
  return (
    <Layout title="중고 거래" hasTabBar>
      <AuthGuard>
        <Head>
          <title>중고 거래 | 글쓰기</title>
        </Head>
        <div>
          <form>
            <div className="flex border-b items-center pb-4">
              <BackBtn />
              <h2 className="text-lg text-gray-700 font-medium ml-2">
                중고 거래 글쓰기
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
                <div className="col-span-6">
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700"
                  >
                    가격
                  </label>
                  <select
                    id="price"
                    name="price"
                    className="mt-1 block w-full rounded-sm border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
                <div className="col-span-6">
                  <label className="block text-sm font-medium text-gray-700">
                    사진
                  </label>
                  <div className="mt-1 flex justify-center rounded-sm border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-sm bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>사진 업로드 하기</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end px-2">
              <Button text="저장" />
            </div>
          </form>
        </div>
      </AuthGuard>
    </Layout>
  );
};
export default Write;
