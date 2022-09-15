import { HeartIcon } from '@heroicons/react/24/outline';

interface HeartBtnProps {
  likes: number;
}

export default function HeartBtn({ likes }: HeartBtnProps) {
  return (
    <button type="button" className="flex items-center text-gray-500">
      <HeartIcon className="w-6 h-6 mr-1" />
      {likes}
    </button>
  );
}
