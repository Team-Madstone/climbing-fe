import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import gymPic from '../assets/august.jpeg';
import gymPic2 from '../assets/august2.jpeg';
import gymPic3 from '../assets/theclimbsnu.png';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import GymInfoBox from '../components/GymInfoBox';

const gyms = [
  {
    id: 1,
    name: '어거스트 클라이밍',
    place: '금천구',
    imageSrc: gymPic,
    imageAlt: '어거스트 클라이밍',
  },
  {
    id: 2,
    name: '구로 클라이밍',
    place: '구로구',
    imageSrc: gymPic2,
    imageAlt: '구로 클라이밍',
  },
  {
    id: 3,
    name: '더클라임 서울대',
    place: '관악구',
    imageSrc: gymPic3,
    imageAlt: '더클라임',
  },
];

const Home: NextPage = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <Layout title="홈" searchUrl="/gym-info/search" hasTabBar>
      <Head>
        <title>홈</title>
      </Head>
      <div>
        <div className="relative">
          <div className="hidden sm:block">
            <SearchBar
              text="암장 이름 또는 지역으로 검색"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            />
          </div>
          {isSearchOpen && (
            <div>
              <div className="absolute top-0 w-full z-10">
                <SearchBar text="암장 이름 또는 지역으로 검색" />
                <div className="w-full z-10 p-4 sm:p-6 bg-white rounded-b-sm shadow top-[40px] border">
                  <p className="text-sm mb-4">지역별 검색</p>
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
              <div
                onClick={() => setIsSearchOpen(false)}
                className="fixed bg-gray-300 opacity-50 top-0 left-0 w-full h-full"
              ></div>
            </div>
          )}
        </div>
        <div className="mx-auto pt-4 sm:pt-10">
          <div className="flex flex-col justify-center items-center sm:grid gap-y-10 sm:grid-cols-2 gap-x-6 xl:gap-x-8">
            {gyms.map((gym) => (
              <GymInfoBox gym={gym} key={gym.id} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
