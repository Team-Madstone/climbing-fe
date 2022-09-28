import { NextPage } from 'next';
import Head from 'next/head';
import BackBtn from '../../components/BackBtn';

const Search: NextPage = () => {
  return (
    <div>
      <Head>
        <title>암장 정보 | 검색하기</title>
      </Head>
      <div className="flex border-b border-gray-300">
        <div className="flex items-center px-2 py-4 ">
          <BackBtn />
        </div>
        <div className="my-4 mr-5 w-full">
          <input
            type="search"
            className="bg-gray-200 border-none text-sm font-medium text-gray-700  p-3 rounded-sm w-full focus:outline-none"
            placeholder="암장 이름 또는 지역 검색"
          />
        </div>
      </div>
      <div className="m-4">
        <p className="text-sm mb-4 font-medium">지역별 검색</p>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-4">
          <button
            type="button"
            className="inline-flex items-center w-full justify-center px-2 sm:px-4 py-2 border border-transparent text-xs sm:text-sm font-medium rounded-sm shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            강남구
          </button>
          <button
            type="button"
            className="inline-flex items-center w-full justify-center rounded-sm border border-gray-300 bg-white px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            금천구
          </button>
          <button
            type="button"
            className="inline-flex items-center w-full justify-center rounded-sm border border-gray-300 bg-white px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            서대문구
          </button>
          <button
            type="button"
            className="inline-flex items-center w-full justify-center rounded-sm border border-gray-300 bg-white px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            구로구
          </button>
          <button
            type="button"
            className="inline-flex items-center w-full justify-center rounded-sm border border-gray-300 bg-white px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            관악구
          </button>
        </div>
        <div className="w-full flex justify-end">
          <button
            type="button"
            className="rounded-sm mt-6 border border-transparent bg-indigo-100 px-4 py-2 text-xs sm:text-sm font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            검색하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
