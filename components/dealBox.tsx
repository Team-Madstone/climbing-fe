import { StaticImageData } from 'next/image';
import Link from 'next/link';
import BookmarkBtn from './BookmarkBtn';
import HeartBtn from './HeartBtn';

interface DealBoxProps {
  product: {
    id: number;
    name: string;
    price: string;
    imageSrc: StaticImageData;
  };
}

export default function DealBox({ product }: DealBoxProps) {
  return (
    <Link key={product.id} href={`/deal/${product.id}`}>
      <div className="w-full">
        <div className="w-full h-[220px] overflow-hidden rounded-sm">
          <div
            style={{
              backgroundImage: `url(${product.imageSrc.src})`,
            }}
            className="h-full bg-center bg-cover"
          ></div>
        </div>
        <div className="mt-3 flex items-center justify-between text-base text-gray-900">
          <h3>{product.name}</h3>
          <div className="flex items-center">
            <HeartBtn likes={13} />
            <BookmarkBtn />
          </div>
        </div>
        <p className="mt-1  font-medium">{product.price}</p>
      </div>
    </Link>
  );
}
