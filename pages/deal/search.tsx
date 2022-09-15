import { NextPage } from 'next';
import Head from 'next/head';
import BackBtn from '../../components/backBtn';
import SearchBar from '../../components/searchBar';

const Search: NextPage = () => {
  return (
    <div>
      <Head>
        <title>중고 거래 | 검색하기</title>
      </Head>
      <div className="flex border-b border-gray-300">
        <div className="flex items-center px-2 py-4 ">
          <BackBtn />
        </div>
        <div className="my-4 mr-5 w-full">
          <SearchBar text="물건 또는 유저 아이디로 검색" />
        </div>
      </div>
    </div>
  );
};

export default Search;
