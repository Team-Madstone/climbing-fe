import { useReactiveVar } from '@apollo/client';
import {
  HomeIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';
import { handleLogout, loginUserVar } from '../apollo-store';

interface LayoutProps {
  title?: string;
  searchUrl?: string | undefined;
  hasTabBar?: boolean;
  children: React.ReactNode;
}

export default function Layout({
  searchUrl,
  hasTabBar,
  children,
}: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const loginUser = useReactiveVar(loginUserVar);

  const onLogoutClick = () => {
    handleLogout();
    setIsMenuOpen(false);
  };

  return (
    <div>
      <div className="max-w-[640px] mx-auto">
        {hasTabBar ? (
          <nav>
            <div className="flex justify-between items-center mb-4 sm:mb-16 py-5 px-4 md:px-0">
              <Link href="/">
                <h1 className="text-2xl cursor-pointer">Madstone</h1>
              </Link>
              <div className="flex">
                <span className="mr-6 hidden sm:block">
                  <Link href="/gym-info">암장 정보</Link>
                </span>
                <span className="mr-6 hidden sm:block">
                  <Link href="/meetup">동행 모집</Link>
                </span>
                <span className="mr-24 hidden sm:block">
                  <Link href="/deal">중고 거래</Link>
                </span>
              </div>
              <div className="flex justify-center items-center">
                {searchUrl && (
                  <Link href={searchUrl}>
                    <MagnifyingGlassIcon className="w-6 h-6 sm:hidden" />
                  </Link>
                )}
                <span
                  onClick={() => setIsMenuOpen(true)}
                  className="w-8 h-8 bg-gray-200 rounded-full ml-5 cursor-pointer"
                ></span>
                {isMenuOpen && loginUser && (
                  <div>
                    <div className="relative">
                      <ul className="absolute border rounded-sm w-32 top-8 right-0 bg-white z-20 shadow">
                        <Link href="/chats">
                          <li className="text-sm px-5 py-2 hover:bg-gray-50 cursor-pointer">
                            채팅하기
                          </li>
                        </Link>
                        <Link href="/profile">
                          <li className="text-sm px-5 py-2 hover:bg-gray-50 cursor-pointer">
                            프로필 보기
                          </li>
                        </Link>
                        <Link href="/">
                          <li
                            onClick={onLogoutClick}
                            className="text-sm px-5 py-2 hover:bg-gray-50 cursor-pointer"
                          >
                            로그아웃
                          </li>
                        </Link>
                      </ul>
                    </div>
                    <div
                      onClick={() => setIsMenuOpen(false)}
                      className="fixed top-0 left-0 w-full h-full z-10"
                    ></div>
                  </div>
                )}
                {isMenuOpen && !loginUser && (
                  <div>
                    <div className="relative">
                      <ul className="absolute border rounded-sm w-32 top-8 right-0 bg-white z-20 shadow">
                        <Link href="/login">
                          <li className="text-sm px-5 py-2 hover:bg-gray-50 cursor-pointer">
                            로그인
                          </li>
                        </Link>
                        <Link href="/register">
                          <li className="text-sm px-5 py-2 hover:bg-gray-50 cursor-pointer">
                            회원가입
                          </li>
                        </Link>
                      </ul>
                    </div>
                    <div
                      onClick={() => setIsMenuOpen(false)}
                      className="fixed top-0 left-0 w-full h-full z-10"
                    ></div>
                  </div>
                )}
              </div>
            </div>
            <div className="sm:hidden flex bg-gray-50 border fixed bottom-0 w-full h-16 z-10 items-center justify-center">
              <Link href="/gym-info">
                <span className="flex-col justify-center items-center sm:hidden text-sm w-1/3 cursor-pointer">
                  <HomeIcon className="w-6 h-6 mx-auto text-gray-500" />
                  <p className="block mx-auto text-center mt-1 text-gray-500">
                    암장 정보
                  </p>
                </span>
              </Link>
              <Link href="/meetup">
                <span className="flex-col justify-center items-center sm:hidden text-sm w-1/3 cursor-pointer">
                  <UserGroupIcon className="w-6 h-6 mx-auto text-gray-500" />
                  <p className="block mx-auto text-center mt-1 text-gray-500">
                    동행 모집
                  </p>
                </span>
              </Link>
              <Link href="/deal">
                <span className="flex-col justify-center items-center sm:hidden text-sm w-1/3 cursor-pointer">
                  <ShoppingBagIcon className="w-6 h-6 mx-auto text-gray-500" />
                  <p className="block mx-auto text-center mt-1 text-gray-500">
                    중고 거래
                  </p>
                </span>
              </Link>
            </div>
          </nav>
        ) : null}
        <div className="mb-24 sm:mb-16 px-4 md:px-0 relative">{children}</div>
      </div>
    </div>
  );
}
