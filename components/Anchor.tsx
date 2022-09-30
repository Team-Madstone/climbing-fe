import Link from 'next/link';
import { classNames } from '../shared/share';

interface IProps {
  href: string;
  text: string;
  styling?: 'textOnly' | 'button' | 'fullLightBtn';
}

export default function Anchor({ href, text, styling }: IProps) {
  return (
    <Link href={href}>
      <a
        className={classNames(
          `inline-block px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-sm text-sm cursor-pointer mr-2`,
          styling === 'textOnly' &&
            'bg-transparent text-gray-500 hover:text-gray-700 hover:bg-transparent',
          styling === 'fullLightBtn' &&
            'bg-indigo-50 hover:bg-indigo-100 w-full border text-center text-gray-600 mr-0'
        )}
      >
        {text}
      </a>
    </Link>
  );
}
