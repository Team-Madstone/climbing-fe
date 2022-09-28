import {
  EllipsisVerticalIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/24/outline';
import { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import Layout from '../../components/Layout';
import productPic from '../../assets/bag.jpeg';
import Link from 'next/link';
import BackBtn from '../../components/BackBtn';
import ReportChatModal from '../../components/ReportChatModal';

const ChatDetail: NextPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReportClick = () => {
    setIsMenuOpen(false);
    setIsModalOpen(true);
  };

  return (
    <Layout title="채팅하기" hasTabBar>
      <Head>
        <title>채팅하기 | </title>
      </Head>
      <div className="mb-40 sm:mb-24 px-4 sm:px-0">
        <div className="flex justify-between items-center border-b pb-4">
          <BackBtn />
          <Link href="/profile/1">
            <span className="text-gray-700 font-medium text-lg cursor-pointer">
              jelly
            </span>
          </Link>
          <div className="relative">
            <EllipsisVerticalIcon
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-6 h-6 cursor-pointer text-gray-500"
            />
            {isMenuOpen && (
              <div>
                <span
                  onClick={() => handleReportClick()}
                  className="absolute rounded-sm shadow px-5 py-2 text-sm border bg-white w-32 right-0 mt-2 z-10 hover:bg-gray-50"
                >
                  신고하기
                </span>
                <div
                  onClick={() => setIsMenuOpen(false)}
                  className="fixed top-0 left-0 w-full h-full"
                ></div>
              </div>
            )}
          </div>
        </div>
        <div className="py-4 border-b">
          <Link href="/deal/1">
            <div className="flex h-[100px] rounded-sm cursor-pointer">
              <div
                style={{ backgroundImage: `url(${productPic.src})` }}
                className="w-1/3 sm:w-1/4 h-full bg-center bg-cover"
              ></div>
              <div className="ml-4">
                <p className="mt-1">초크백</p>
                <p className="mt-1 font-medium">13,000원</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="sm:h-full h-auto overflow-hidden mt-4 mb-20">
          <div className="flex items-center">
            <span className="w-8 h-8 block bg-gray-200 rounded-full cursor-pointer"></span>
            <span className="ml-4 bg-indigo-300 px-4 py-2 rounded-sm text-sm sm:text-base">
              안녕하세요~
            </span>
          </div>

          <div className="flex flex-row-reverse items-center mt-3">
            <span className="bg-gray-300 px-4 py-2 rounded-sm text-sm sm:text-base">
              안녕하세요!
            </span>
          </div>

          <div className="flex items-center mt-3">
            <span className="w-8 h-8 block bg-gray-200 rounded-full cursor-pointer"></span>
            <span className="ml-4 bg-indigo-300 px-4 py-2 rounded-sm text-sm sm:text-base">
              아직 판매하시나요?
            </span>
          </div>
          <div className="flex items-center mt-3">
            <span className="w-8 h-8 block bg-gray-200 rounded-full cursor-pointer"></span>
            <span className="ml-4 bg-indigo-300 px-4 py-2 rounded-sm text-sm sm:text-base">
              아직 판매하시나요?
            </span>
          </div>
          <div className="flex items-center mt-3">
            <span className="w-8 h-8 block bg-gray-200 rounded-full cursor-pointer"></span>
            <span className="ml-4 bg-indigo-300 px-4 py-2 rounded-sm text-sm sm:text-base">
              아직 판매하시나요?
            </span>
          </div>
          <div className="flex items-center mt-3">
            <span className="w-8 h-8 block bg-gray-200 rounded-full cursor-pointer"></span>
            <span className="ml-4 bg-indigo-300 px-4 py-2 rounded-sm text-sm sm:text-base">
              아직 판매하시나요?
            </span>
          </div>
          <div className="flex items-center mt-3">
            <span className="w-8 h-8 block bg-gray-200 rounded-full cursor-pointer"></span>
            <span className="ml-4 bg-indigo-300 px-4 py-2 rounded-sm text-sm sm:text-base">
              아직 판매하시나요?
            </span>
          </div>
          <div className="flex items-center mt-3">
            <span className="w-8 h-8 block bg-gray-200 rounded-full cursor-pointer"></span>
            <span className="ml-4 bg-indigo-300 px-4 py-2 rounded-sm text-sm sm:text-base">
              아직 판매하시나요?
            </span>
          </div>
        </div>
        <div className="fixed flex justify-center items-center w-full sm:max-w-[640px] px-2 left-0 sm:left-auto bottom-[64px] sm:bottom-0 border-t bg-white">
          <input
            type="text"
            className="w-[84%] rounded-sm border-none bg-gray-200 mx-2 my-4 focus:outline-nonep py-2"
          />
          <PaperAirplaneIcon className="w-7 h-7" />
        </div>
        {isModalOpen && <ReportChatModal setIsModalOpen={setIsModalOpen} />}
      </div>
    </Layout>
  );
};

export default ChatDetail;
