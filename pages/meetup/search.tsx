import { NextPage } from 'next';
import Head from 'next/head';
import BackBtn from '../../components/BackBtn';

const Search: NextPage = () => {
  return (
    <div>
      <Head>
        <title>동행 모집 | 검색하기</title>
      </Head>
      <div className="flex border-b border-gray-300">
        <div className="flex items-center px-2 py-4">
          <BackBtn />
        </div>
        <div className="my-4 mr-5 w-full">
          <input
            type="search"
            className="bg-gray-200 border-none text-sm font-medium text-gray-700  p-3 rounded-sm w-full focus:outline-none"
            placeholder="암장 이름 또는 유저 아이디로 검색"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
