import { PlusIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface WriteIconProps {
  href: string;
}

export default function WriteIcon({ href }: WriteIconProps) {
  return (
    <div>
      <div className="fixed z-10 bottom-20 right-6 sm:flex sm:justify-end sm:static sm:mt-4 ">
        <Link href={href}>
          <div>
            <div className="sm:hidden w-11 h-11 p-2 bg-indigo-600 rounded-full drop-shadow-lg">
              <PlusIcon className="z-10 text-white stroke-2" />
            </div>
            <span className="hidden sm:inline-block text-white bg-indigo-600 py-3 px-5 text-sm rounded-sm cursor-pointer">
              글쓰기
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
