import {
  EllipsisVerticalIcon,
  HomeIcon,
  LinkIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../../components/layout';
import img from '../../assets/august.jpeg';
import MeetupBox from '../../components/meetupBox';
import HeartBtn from '../../components/heartBtn';
import BookmarkBtn from '../../components/bookmarkBtn';
import BackBtn from '../../components/backBtn';
import { useState } from 'react';
import Button from '../../components/button';
import ModalNav from '../../components/modalNav';
import ModalBox from '../../components/modalBox';

const positions = [
  {
    id: 1,
    title: '함께 가실 분 모집합니다',
    type: 'Full-time',
    location: '어거스트 클라이밍',
    member: 1,
    totalMembers: 4,
    date: '9월 3일 토요일 12:00',
  },
  {
    id: 2,
    title: '어거스트 클라이밍 어떠세요',
    type: 'Full-time',
    location: '어거스트 클라이밍',
    member: 1,
    totalMembers: 6,
    date: '9월 10일 토요일 11:00',
  },
];

const GymInfoDetail: NextPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReportClick = () => {
    setIsMenuOpen(false);
    setIsModalOpen(true);
  };

  const onModalClick = () => {
    setIsModalOpen(false);
  };

  return (
    <Layout title="암장 정보" hasTabBar>
      <Head>
        <title>암장 정보 | </title>
      </Head>
      <div>
        <div>
          <div className="flex items-center justify-between">
            <BackBtn />
            <div className="flex items-center">
              <LinkIcon className="w-5 h-5 mr-2 cursor-pointer" />
              <div className="relative">
                <EllipsisVerticalIcon
                  onClick={() => setIsMenuOpen(true)}
                  className="w-6 h-6 cursor-pointer"
                />
                {isMenuOpen && (
                  <span
                    onClick={() => handleReportClick()}
                    className="absolute rounded-sm shadow px-5 py-2 text-sm border bg-white w-40 right-0 mt-2 z-10 hover:bg-gray-50 cursor-pointer"
                  >
                    잘못된 정보 신고하기
                  </span>
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
          <div className="w-full mt-4">
            <div className="w-full h-[300px] rounded-sm overflow-hidden bg-cover mx-auto flex items-center justify-center">
              <div
                style={{ backgroundImage: `url(${img.src})` }}
                className="w-full h-full bg-center bg-cover"
              ></div>
            </div>
            <div className="w-full mt-4">
              <span className="text-gray-500">금천구</span>
              <div className="flex justify-between ">
                <p className="text-xl font-medium mt-3">어거스트 클라이밍</p>
              </div>
              <div className="flex mt-4 items-center pb-4 border-b">
                <HeartBtn likes={20} />
                <BookmarkBtn />
              </div>
              <div className="flex mt-6 text-gray-400 text-[15px] items-center">
                <MapPinIcon className="w-5 h-5 mr-3" />
                <p className="text-gray-700">
                  서울 금천구 디지털로 121 20층 2009호
                </p>
              </div>
              <div className="flex mt-3 text-gray-400 text-[15px] items-center">
                <PhoneIcon className="w-5 h-5 mr-3" />
                <p className="text-gray-700">02-3016-7964</p>
              </div>
              <div className="flex mt-3 text-gray-400 text-[15px] items-center">
                <HomeIcon className="w-5 h-5 mr-3" />
                <p className="text-gray-700">
                  평일 11:00 ~ 22:00
                  <br />
                  월 셋팅 시 17:00 ~ 22:00
                  <br />
                  주말 및 공휴일 11:00 ~ 19:00
                </p>
              </div>
            </div>
          </div>
          <div className="border-b mt-6 border-gray-200"></div>
          <h3 className="mt-6 text-[17px] font-medium">연관된 동행 모집</h3>
          <ul className="mt-4">
            {positions.map((position) => (
              <MeetupBox position={position} key={position.id} />
            ))}
          </ul>
        </div>
        {isModalOpen && (
          <div>
            <div className="flex justify-center">
              <ModalBox>
                <ModalNav onClick={onModalClick} text="잘못된 정보 신고하기" />
                <div className="p-6">
                  <div className="flex flex-col items-center mb-4">
                    <div className=" w-full">
                      <p className="text-sm sm:text-base text-gray-600">
                        잘못된 정보를 알려주세요
                      </p>
                      <textarea
                        rows={4}
                        className="block mt-4 w-full border-gray-400"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button text="신고하기" />
                  </div>
                </div>
              </ModalBox>
              <div
                onClick={() => setIsModalOpen(false)}
                className="fixed bg-gray-300 opacity-50 top-0 left-0 w-full h-full"
              ></div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default GymInfoDetail;
