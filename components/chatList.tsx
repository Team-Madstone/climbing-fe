import Link from 'next/link';

interface personProps {
  person: {
    id: number;
    name: string;
    chat: string;
    imageUrl: string;
    type: string;
  };
}

export default function ChatList({ person }: personProps) {
  return (
    <Link href={`/chats/1`} key={person.id}>
      <li className="py-4 cursor-pointer hover:bg-gray-50">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <img
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
              src={person.imageUrl}
              alt="profile"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm sm:text-base font-medium text-gray-900">
              {person.name}
            </p>
            <p className="truncate text-sm sm:text-base text-gray-500">
              {person.chat}
            </p>
          </div>
          <div>
            <span className="inline-flex items-center rounded-sm border border-gray-300 bg-white px-2.5 py-0.5 text-xs font-medium leading-5 text-gray-700 shadow-sm">
              {person.type}
            </span>
          </div>
        </div>
      </li>
    </Link>
  );
}
