import { useReactiveVar } from '@apollo/client';
import { NextPage } from 'next';
import Head from 'next/head';
import { loginUserVar } from '../../apollo-store';
import Layout from '../../components/layout';
import MeetupBox from '../../components/meetupBox';
import SearchBar from '../../components/searchBar';
import WriteIcon from '../../components/writeIcon';

const positions = [
  {
    id: 1,
    title: '함께 가실 분 모집합니다',
    type: 'Full-time',
    location: '구로 클라이밍',
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
  {
    id: 3,
    title: '금요일 풀타임 클라이밍 가보자고~',
    type: 'Full-time',
    location: '강남 클라이밍',
    member: 1,
    totalMembers: 4,
    date: '9월 2일 금요일 18:00',
  },
  {
    id: 4,
    title: '어거스트 클라이밍 어떠세요',
    type: 'Full-time',
    location: '어거스트 클라이밍',
    member: 4,
    totalMembers: 10,
    date: '9월 10일 토요일 11:00',
  },
  {
    id: 5,
    title: '금요일 풀타임 클라이밍 가보자고~',
    type: 'Full-time',
    location: '강남 클라이밍',
    member: 3,
    totalMembers: 8,
    date: '9월 2일 금요일 18:00',
  },
];

const Meetup: NextPage = () => {
  const user = useReactiveVar(loginUserVar);

  return (
    <Layout title="동행 모집" searchUrl="/meetup/search" hasTabBar>
      <Head>
        <title>동행 모집</title>
      </Head>
      <div>
        <div className="hidden sm:block">
          <SearchBar text="암장 이름 또는 유저 아이디로 검색" />
        </div>
        <div className="mx-auto">
          <div className="overflow-hidden bg-white relative">
            <WriteIcon user={user} href="/meetup/write" />
            <ul role="list" className="mt-4">
              {positions.map((position) => (
                <MeetupBox position={position} key={position.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Meetup;
