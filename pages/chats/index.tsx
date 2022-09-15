import type { NextPage } from 'next';
import Head from 'next/head';
import ChatList from '../../components/chatList';
import Layout from '../../components/layout';

const people = [
  {
    id: 1,
    name: 'Leonard',
    chat: '안녕하세요~',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    type: '중고 거래',
  },
  {
    id: 2,
    name: 'Floyd',
    chat: '넵 그때 봬요~',
    imageUrl:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    type: '동행 모집',
  },
  {
    id: 3,
    name: 'Emily',
    chat: '팔렸나요~?',
    imageUrl:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    type: '중고 거래',
  },
  {
    id: 4,
    name: 'Kristin',
    chat: '좋습니다!',
    imageUrl:
      'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    type: '중고 거래',
  },
];

const Chats: NextPage = () => {
  return (
    <Layout title="채팅" hasTabBar>
      <Head>
        <title>채팅</title>
      </Head>
      <div>
        <h3 className="text-2xl font-medium">채팅 목록</h3>
        <div>
          <div className="mt-6 flow-root">
            <ul role="list" className="-my-5 divide-y divide-gray-200">
              {people.map((person) => (
                <ChatList person={person} key={person.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Chats;
