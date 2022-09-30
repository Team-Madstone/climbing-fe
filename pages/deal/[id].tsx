import { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../../components/Layout';
import img from '../../assets/bag3.png';
import Image from 'next/image';
import Button from '../../components/Button';
import HeartBtn from '../../components/HeartBtn';
import BookmarkBtn from '../../components/BookmarkBtn';
import BackBtn from '../../components/BackBtn';
import { EllipsisVerticalIcon, LinkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import Link from 'next/link';
import ReportDealModal from '../../components/ReportDealModal';

const DealDetail: NextPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReportClick = () => {
    setIsMenuOpen(false);
    setIsModalOpen(true);
  };

  return (
    <Layout title="중고 거래" hasTabBar>
      <Head>
        <title>중고 거래 | </title>
      </Head>
      <div>
        <div className="flex items-center justify-between">
          <BackBtn />
          <div className="flex items-center">
            <LinkIcon className="w-5 h-5 mr-2 cursor-pointer" />
            <div className="relative">
              <EllipsisVerticalIcon
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="w-6 h-6 cursor-pointer"
              />
              {isMenuOpen && (
                <span
                  onClick={() => handleReportClick()}
                  className="absolute rounded-sm shadow px-5 py-2 text-sm border bg-white w-32 right-0 mt-2 z-10 hover:bg-gray-50"
                >
                  신고하기
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
          <div className="w-full h-[360px] rounded-sm overflow-hidden bg-cover mx-auto flex items-center justify-center bg-gray-100">
            <Image
              src={img}
              className="w-full h-full object-center object-cover group-hover:opacity-75"
              alt="클라이밍 사진"
            />
          </div>
          <div className="w-full">
            <div className="flex items-center mt-4 justify-between pb-2">
              <div className="flex items-center">
                <Link href="/profile/1">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                    <span>jelly</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex justify-between items-center mt-2">
              <p className="text-xl font-medium">블랙 다이아몬드 배낭</p>
            </div>
            <div className="flex mt-4 items-center pb-4">
              <HeartBtn likes={5} />
              <BookmarkBtn />
            </div>
            <div className="border-b"></div>
            <div className="mt-4">
              블랙 다이아몬드 배낭 팝니다~
              <br />
              직거래 원합니다
            </div>
            <div className="flex items-center justify-between mt-4">
              <p className="mt-2 text-lg font-bold">72,000원</p>
              <Button text="거래하기" />
            </div>
          </div>
        </div>
        {isModalOpen && <ReportDealModal setIsModalOpen={setIsModalOpen} />}
      </div>
    </Layout>
  );
};

export default DealDetail;
