import {
  CalendarIcon,
  MapPinIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import BookmarkBtn from './bookmarkBtn';
import HeartBtn from './heartBtn';

interface MeetupBoxProps {
  position: {
    id: number;
    title: string;
    location: string;
    member: number;
    totalMembers: number;
    date: string;
  };
}

export default function MeetupBox({ position }: MeetupBoxProps) {
  return (
    <li className="pb-4 sm:pb-6 last:pb-0 drop-shadow-sm" key={position.id}>
      <Link href={`/meetup/${position.id}`}>
        <div className="px-4 py-4 sm:px-6 border rounded-sm hover:bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
              <p>jelly</p>
            </div>
            <div className="flex ">
              <HeartBtn likes={20} />
              <BookmarkBtn />
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <p className="truncate font-medium text-indigo-600">
              {position.title}
            </p>
          </div>
          <div className="mt-2 sm:flex sm:justify-between">
            <div className="sm:flex">
              <p className="flex items-center text-sm text-gray-700">
                <UsersIcon
                  className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                {position.member} / {position.totalMembers}명
              </p>
              <p className="mt-2 flex items-center text-sm text-gray-700 sm:mt-0 sm:ml-6">
                <MapPinIcon
                  className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                {position.location}
              </p>
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-700 sm:mt-0">
              <CalendarIcon
                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              <p>{position.date}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}
