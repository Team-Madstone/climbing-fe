import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';

export default function BackBtn() {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.back()}>
      <ChevronLeftIcon className="w-6 h-6 items-center text-gray-500 cursor-pointer" />
    </button>
  );
}
