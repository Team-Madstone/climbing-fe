import { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../../components/layout';
import productPic from '../../assets/bag.jpeg';
import productPic2 from '../../assets/shoes.jpeg';
import productPic3 from '../../assets/bag3.png';
import SearchBar from '../../components/searchBar';
import DealBox from '../../components/dealBox';
import WriteIcon from '../../components/writeIcon';
import { useReactiveVar } from '@apollo/client';
import { loginUserVar } from '../../apollo-store';

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

const Deal: NextPage = () => {
  const user = useReactiveVar(loginUserVar);

  return (
    <Layout title="중고 거래" searchUrl="/deal/search" hasTabBar>
      <Head>
        <title>중고 거래</title>
      </Head>
      <div>
        <div className="hidden sm:block">
          <SearchBar text="물건 또는 유저 아이디로 검색" />
        </div>
        <WriteIcon user={user} href="/deal/write" />
        <div className="mx-auto pt-4">
          <div className="flex flex-col justify-center items-center sm:grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 xl:gap-x-8">
            {products.map((product) => (
              <DealBox product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Deal;
