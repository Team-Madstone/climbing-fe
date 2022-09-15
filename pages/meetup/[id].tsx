import {
  CalendarIcon,
  ChevronRightIcon,
  EllipsisVerticalIcon,
  LinkIcon,
  MapPinIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import BackBtn from '../../components/backBtn';
import BookmarkBtn from '../../components/bookmarkBtn';
import Button from '../../components/button';
import HeartBtn from '../../components/heartBtn';
import Layout from '../../components/layout';
import ModalBox from '../../components/modalBox';
import ModalNav from '../../components/modalNav';

const MeetupDetail: NextPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMemberOpen, setIsMemberOpen] = useState(false);

  const handleReportClick = () => {
    setIsMenuOpen(false);
    setIsModalOpen(true);
  };

  const onModalClick = () => {
    setIsModalOpen(false);
  };

  const onMemberClick = () => {
    setIsMemberOpen(false);
  };

  return (
    <Layout title="동행 모집" hasTabBar>
      <Head>
        <title>동행 모집 | </title>
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
          <div>
            <div className="flex items-center my-4">
              <Link href="/profile/1">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                  <span>jelly</span>
                </div>
              </Link>
            </div>
            <p className="truncate text-xl font-medium">
              함께 가실 분 모집합니다
            </p>
            <div className="flex py-4 items-center border-b">
              <HeartBtn likes={3} />
              <BookmarkBtn />
            </div>
          </div>
          <div className="mt-4">
            <p>안녕하세요~ 함께 가실 분 모집합니다</p>
            <div className="text-sm mt-6">
              <div className="flex">
                <CalendarIcon
                  className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <p className="text-gray-700">9월 3일 토요일 12:00</p>
              </div>
              <Link
                href={`/gym-info/1`}
                className="mt-2 flex items-center text-sm"
              >
                <div className="flex mt-2 cursor-pointer items-center">
                  <MapPinIcon
                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <p className="text-gray-700 px-2.5 py-1 rounded bg-[#f6f6f6] border border-gray-300">
                    구로 클라이밍
                  </p>
                </div>
              </Link>
              <div className="mt-2 flex items-center text-sm mb-6">
                <UsersIcon
                  className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <div className="text-gray-700 flex items-center">
                  1 / 4명
                  <ChevronRightIcon
                    onClick={() => setIsMemberOpen(true)}
                    className="w-4 h-4 ml-1 stroke-2 cursor-pointer"
                  />
                </div>
              </div>
              <Button text="참여하기" />
            </div>
            <div className="mt-2 flex items-center text-sm sm:mt-0"></div>
          </div>
        </div>
        {isModalOpen && (
          <div>
            <div className="flex justify-center items-center">
              <ModalBox>
                <ModalNav onClick={onModalClick} text="동행 모집 신고하기" />
                <div className="p-6">
                  <div className="flex flex-col items-center mb-2 text-gray-600">
                    <div className="my-2 w-full">
                      <input
                        id="reason1"
                        type="radio"
                        value="reason1"
                        name="report"
                        className="mr-3"
                      />
                      <label
                        htmlFor="reason1"
                        className="w-full py-2 text-sm sm:text-base"
                      >
                        부적절한 모임입니다.
                      </label>
                    </div>
                    <div className="my-2 w-full">
                      <input
                        id="reason2"
                        type="radio"
                        value="reason2"
                        name="report"
                        className="mr-3"
                      />
                      <label
                        htmlFor="reason2"
                        className="w-full py-2 text-sm sm:text-base"
                      >
                        광고 / 홍보 글입니다.
                      </label>
                    </div>
                    <div className="my-2 w-full">
                      <input
                        id="reason3"
                        type="radio"
                        value="reason3"
                        name="report"
                        className="mr-3"
                      />
                      <label
                        htmlFor="reason3"
                        className="w-full py-2 text-sm sm:text-base"
                      >
                        중복, 도배성 글입니다.
                      </label>
                    </div>
                    <div className="my-2 w-full">
                      <input
                        id="reason4"
                        type="radio"
                        value="reason4"
                        name="report"
                        className="mr-3"
                      />
                      <label
                        htmlFor="reason4"
                        className="w-full py-2 text-sm sm:text-base"
                      >
                        비방하는 글입니다.
                      </label>
                    </div>
                    <div className="my-2 w-full">
                      <input
                        id="reason5"
                        type="radio"
                        value="reason5"
                        name="report"
                        className="mr-3"
                      />
                      <label
                        htmlFor="reason5"
                        className="w-full py-2 text-sm sm:text-base"
                      >
                        관련 없는 글입니다.
                      </label>
                    </div>
                    <div className="my-2 w-full">
                      <input
                        id="reason6"
                        type="radio"
                        value="reason6"
                        name="report"
                        className="mr-3"
                      />
                      <label
                        htmlFor="reason6"
                        className="w-full py-2 text-sm sm:text-base"
                      >
                        기타
                        <div className="ml-6">
                          <textarea
                            rows={4}
                            className="block mt-3 w-full border-gray-400"
                          />
                        </div>
                      </label>
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
        {isMemberOpen && (
          <div>
            <div className="flex justify-center items-center">
              <ModalBox>
                <ModalNav onClick={onMemberClick} text="참여한 멤버 보기" />
                <div className="p-6">
                  <div className="flex flex-col items-center mb-2 text-gray-600">
                    <div className="flex items-center my-2 w-full cursor-pointer">
                      <Link href="/profile/1">
                        <div className="flex w-full">
                          <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                          <span className="py-2 text-sm sm:text-base">
                            jelly
                          </span>
                        </div>
                      </Link>
                    </div>
                    <div className="flex items-center my-2 w-full cursor-pointer">
                      <Link href="/profile/1">
                        <div className="flex w-full">
                          <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                          <span className="py-2 text-sm sm:text-base">
                            yellow
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalBox>
              <div
                onClick={() => setIsMemberOpen(false)}
                className="fixed bg-gray-300 opacity-50 top-0 left-0 w-full h-full"
              ></div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default MeetupDetail;
