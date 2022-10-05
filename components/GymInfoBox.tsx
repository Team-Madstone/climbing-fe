import { StaticImageData } from 'next/image';
import Link from 'next/link';
import BookmarkBtn from './BookmarkBtn';
import HeartBtn from './HeartBtn';

interface GymInfoBoxProps {
  gym: {
    id: number;
    name: string;
    place: string;
    imageSrc: StaticImageData;
    imageAlt: string;
  };
}

export default function GymInfoBox({ gym }: GymInfoBoxProps) {
  return (
    <Link href="/gym-info/1">
      <div className="w-full">
        <div className="w-full h-[220px] overflow-hidden rounded-sm">
          <div
            style={{ backgroundImage: `url(${gym.imageSrc.src})` }}
            className="h-full bg-center bg-cover cursor-pointer"
          ></div>
        </div>
        <p className="mt-3 text-sm text-gray-500 cursor-pointer">{gym.place}</p>
        <div className="mt-1 flex items-center justify-between text-base font-medium text-gray-900">
          <Link href={`/gym-info/${gym.id}`}>
            <h3 className="font-semibold cursor-pointer">{gym.name}</h3>
          </Link>
          <div className="flex items-center">
            <HeartBtn likes={17} />
            <BookmarkBtn />
          </div>
        </div>
      </div>
    </Link>
  );
}
