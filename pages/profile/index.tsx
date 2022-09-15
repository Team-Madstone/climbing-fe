import { NextPage } from 'next';
import Head from 'next/head';
import Button from '../../components/button';
import Layout from '../../components/layout';
import gymPic from '../../assets/august.jpeg';
import gymPic2 from '../../assets/august2.jpeg';
import gymPic3 from '../../assets/theclimbsnu.png';
import productPic from '../../assets/bag.jpeg';
import productPic2 from '../../assets/shoes.jpeg';
import productPic3 from '../../assets/bag3.png';
import HeartBtn from '../../components/heartBtn';
import BookmarkBtn from '../../components/bookmarkBtn';
import React, { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import MeetupBox from '../../components/meetupBox';
import ModalNav from '../../components/modalNav';
import ModalBox from '../../components/modalBox';

const tabs = [
  { id: 1, name: '북마크 한 암장 정보' },
  { id: 2, name: '북마크 한 동행 모집' },
  { id: 3, name: '북마크 한 중고 거래' },
];

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
    name: '더클라임',
    place: '관악구',
    imageSrc: gymPic3,
    imageAlt: '더클라임',
  },
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
    member: 1,
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

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

const Profile: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState<number>(1);

  const onTabChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTab(parseInt(e.target.value));
  };

  const onModalClick = () => {
    setIsModalOpen(false);
  };

  return (
    <Layout title="프로필" hasTabBar>
      <Head>
        <title>프로필</title>
      </Head>
      <div>
        <div className="flex flex-col">
          <span className="block w-24 h-24 bg-gray-200 rounded-full mx-auto"></span>
          <p className="mx-auto mt-4 text-xl">jelly</p>
          <div className="flex justify-center pt-4">
            <Button onClick={() => setIsModalOpen(true)} text="프로필 수정" />
          </div>
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
                      selectedTab === 1
                        ? 'border-b-2 border-indigo-600 text-gray-700'
                        : 'text-gray-500 border-b-1 border-gray-300',
                      'w-1/3 py-3 -mx-px text-center'
                    )}
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedTab(1);
                    }}
                  >
                    북마크 한 암장 정보
                  </li>
                  <li
                    className={classNames(
                      selectedTab === 2
                        ? 'border-b-2 border-indigo-600 text-gray-700'
                        : 'text-gray-500 border-b-1 border-gray-300',
                      'w-1/3 py-3 -mx-px text-center'
                    )}
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedTab(2);
                    }}
                  >
                    북마크 한 동행 모집
                  </li>
                  <li
                    className={classNames(
                      selectedTab === 3
                        ? 'border-b-2 border-indigo-600 text-gray-700'
                        : 'text-gray-500 border-b-1 border-gray-300',
                      'w-1/3 py-3 -mx-px text-center'
                    )}
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedTab(3);
                    }}
                  >
                    북마크 한 중고 거래
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {/* 암장 정보 */}
          <div className={selectedTab === 1 ? 'block' : 'hidden'}>
            <div className="mx-auto pt-4 sm:pt-6">
              <div className="flex flex-col justify-center items-center sm:grid grid-cols-1 gap-y-8 sm:grid-cols-2 gap-x-6 xl:gap-x-8">
                {gyms.map((gym) => (
                  <Link
                    key={gym.id}
                    href={`/gym-info/${gym.id}`}
                    className="group w-full"
                  >
                    <div className="w-full">
                      <div className="w-full h-[220px] overflow-hidden rounded-sm">
                        <div
                          style={{
                            backgroundImage: `url(${gym.imageSrc.src})`,
                          }}
                          className="h-full bg-center bg-cover"
                        ></div>
                      </div>
                      <p className="mt-3 text-sm text-gray-500">{gym.place}</p>
                      <div className="mt-1 flex items-center justify-between text-base font-medium text-gray-900">
                        <Link href={`/gym-info/${gym.id}`}>
                          <h3>{gym.name}</h3>
                        </Link>
                        <div className="flex items-center">
                          <HeartBtn likes={20} />
                          <BookmarkBtn />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* 북마크 한 동행 모집*/}
          <div className={selectedTab === 2 ? 'block' : 'hidden'}>
            <div className="mx-auto pt-4 sm:pt-6">
              <div className="overflow-hidden bg-white">
                <ul role="list">
                  {positions.map((position) => (
                    <MeetupBox position={position} key={position.id} />
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 북마크 한 중고 거래  */}
          <div className={selectedTab === 3 ? 'block' : 'hidden'}>
            <div className="mx-auto pt-4 sm:pt-6">
              <div className="flex flex-col justify-center items-center sm:grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 xl:gap-x-8">
                {products.map((product) => (
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
                ))}
              </div>
            </div>
          </div>
          {isModalOpen && (
            <div className="flex justify-center">
              <ModalBox>
                <ModalNav onClick={onModalClick} text="프로필 수정" />
                <div>
                  <div className="flex justify-center w-full">
                    <div className="relative inline-block mt-6">
                      <span className="block w-24 h-24 bg-gray-200 rounded-full mx-auto"></span>
                      <div className="absolute top-0 right-0 bg-white border border-gray-500 p-1 rounded-full cursor-pointer">
                        <PlusIcon className="w-4 h-4 text-gray-600 stroke-2" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-3">
                      <label
                        htmlFor="nickname"
                        className="block text-sm font-medium text-gray-700"
                      >
                        닉네임
                      </label>
                      <input
                        type="text"
                        id="nickname"
                        name="nickname"
                        className="mt-1 block w-full rounded-sm border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                      >
                        비밀번호
                      </label>
                      <input
                        type="text"
                        id="password"
                        name="password"
                        className="mt-1 block w-full rounded-sm border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="flex justify-end pt-2">
                      <Button text="저장" />
                    </div>
                  </div>
                </div>
              </ModalBox>
              <div
                onClick={() => setIsModalOpen(false)}
                className="fixed bg-gray-300 opacity-50 top-0 left-0 w-full h-full"
              ></div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
