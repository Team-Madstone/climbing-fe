import { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../../components/Layout';
import productPic from '../../assets/bag.jpeg';
import productPic2 from '../../assets/shoes.jpeg';
import productPic3 from '../../assets/bag3.png';
import HeartBtn from '../../components/HeartBtn';
import BookmarkBtn from '../../components/BookmarkBtn';
import { useState } from 'react';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import BackBtn from '../../components/BackBtn';
import MeetupBox from '../../components/MeetupBox';
import Link from 'next/link';
import { classNames } from '../../shared/share';
import ReportProfileModal from '../../components/ReportProfileModal';

const tabs = [
  { id: 1, name: '동행 모집' },
  { id: 2, name: '중고 거래' },
];

const positions = [
  {
    id: 1,
    title: '함께 가실 분 모집합니다',
    location: '구로 클라이밍',
    member: 1,
    totalMembers: 4,
    date: '9월 3일 토요일 12:00',
  },
  {
    id: 2,
    title: '어거스트 클라이밍 어떠세요',
    location: '어거스트 클라이밍',
    member: 3,
    totalMembers: 6,
    date: '9월 10일 토요일 11:00',
  },
  {
    id: 3,
    title: '금요일 풀타임 클라이밍 가보자고~',
    location: '강남 클라이밍',
    member: 1,
    totalMembers: 4,
    date: '9월 2일 금요일 18:00',
  },
];

const products = [
  {
    id: 1,
    name: '초크백',
    price: '13,000원',
    imageSrc: productPic,
  },
  {
    id: 2,
    name: '암벽화 size 6',
    price: '64,000원',
    imageSrc: productPic2,
  },
  {
    id: 3,
    name: '블랙 다이아몬드 배낭',
    price: '72,000원',
    imageSrc: productPic3,
  },
];

const ProfileDetail: NextPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState('bookmarkedMeetup');
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  const handleReportClick = () => {
    setIsMenuOpen(false);
    setIsReportModalOpen(true);
  };

  const onTabChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTab(e.target.value);
  };

  return (
    <Layout title="프로필" hasTabBar>
      <Head>
        <title>프로필</title>
      </Head>
      <div>
        <div className="flex justify-between">
          <BackBtn />
          <div className="flex items-center">
            <div className="relative">
              <EllipsisVerticalIcon
                onClick={() => setIsMenuOpen(true)}
                className="w-6 h-6 cursor-pointer"
              />
              {isMenuOpen && (
                <ul className="absolute border rounded-sm w-32 top-8 right-0 bg-white z-10 shadow">
                  <li
                    onClick={() => handleReportClick()}
                    className="block px-5 py-2 text-sm hover:bg-gray-50"
                  >
                    신고하기
                  </li>
                </ul>
              )}
            </div>
            {isMenuOpen && (
              <div
                onClick={() => setIsMenuOpen(false)}
                className="fixed opacity-50 top-0 left-0 w-full h-full"
              ></div>
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <span className="block w-24 h-24 bg-gray-200 rounded-full mx-auto"></span>
          <p className="mx-auto mt-4 text-xl">jelly</p>
        </div>
        <div className="mt-6">
          <div className="sm:hidden">
            <select
              className="block w-full rounded-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              onChange={onTabChange}
            >
              {tabs.map((tab) => (
                <option value={tab.id} key={tab.name}>
                  {tab.name}
                </option>
              ))}
            </select>
          </div>
          <div className="hidden sm:block">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex" aria-label="Tabs">
                <ul className="flex justify-center w-full cursor-pointer text-sm">
                  <li
                    className={classNames(
                      selectedTab === 'bookmarkedMeetup'
                        ? 'border-b-2 border-indigo-600 text-gray-700'
                        : 'text-gray-500 border-b-1 border-gray-300',
                      'w-1/2 py-3 -mx-px text-center'
                    )}
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedTab('bookmarkedMeetup');
                    }}
                  >
                    동행 모집
                  </li>
                  <li
                    className={classNames(
                      selectedTab === 'bookmarkedDeal'
                        ? 'border-b-2 border-indigo-600 text-gray-700'
                        : 'text-gray-500 border-b-1 border-gray-300',
                      'w-1/2 py-3 -mx-px text-center'
                    )}
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedTab('bookmarkedDeal');
                    }}
                  >
                    중고 거래
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div
          className={selectedTab === 'bookmarkedMeetup' ? 'block' : 'hidden'}
        >
          <div className="mx-auto pt-4 sm:pt-6">
            <div className="overflow-hidden bg-white">
              <ul role="list">
                {Object.keys(positions[0]).length > 0 ? (
                  positions.map((position: any) => (
                    <MeetupBox position={position} key={position.id} />
                  ))
                ) : (
                  <div>동행 모집이 없습니다.</div>
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className={selectedTab === 'bookmarkedDeal' ? 'block' : 'hidden'}>
          <div className="mx-auto pt-4">
            <div className="flex flex-col justify-center items-center sm:grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 xl:gap-x-8">
              {Object.keys(products[0]).length > 0 ? (
                products.map((product) => (
                  <Link
                    key={product.id}
                    href={`/deal/${product.id}`}
                    className="group w-full"
                  >
                    <div className="w-full">
                      <div className="w-full h-[220px] overflow-hidden rounded-sm">
                        <div
                          style={{
                            backgroundImage: `url(${product.imageSrc.src})`,
                          }}
                          className="h-full bg-center bg-cover"
                        ></div>
                      </div>
                      <div className="mt-3 flex items-center justify-between text-base font-medium text-gray-900">
                        <h3>{product.name}</h3>
                        <div className="flex items-center">
                          <HeartBtn likes={13} />
                          <BookmarkBtn />
                        </div>
                      </div>
                      <p className="mt-1 font-medium">{product.price}</p>
                    </div>
                  </Link>
                ))
              ) : (
                <div>중고 거래가 없습니다.</div>
              )}
            </div>
          </div>
        </div>

        {isReportModalOpen && (
          <ReportProfileModal setIsReportModalOpen={setIsReportModalOpen} />
        )}
      </div>
    </Layout>
  );
};

export default ProfileDetail;
