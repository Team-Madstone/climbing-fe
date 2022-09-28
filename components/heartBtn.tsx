import { HeartIcon } from '@heroicons/react/24/outline';

interface HeartBtnProps {
  likes: number;
}

export default function HeartBtn({ likes }: HeartBtnProps) {
  return (
    <div className="flex">
      <button type="button" className="flex items-center text-gray-500">
        <HeartIcon className="w-6 h-6 mr-1" />
      </button>
      <span className="cursor-default text-gray-500">{likes}</span>
    </div>
  );
}
