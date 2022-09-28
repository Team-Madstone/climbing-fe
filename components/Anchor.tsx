import Link from 'next/link';

interface IProps {
  href: string;
  text: string;
}

export default function Anchor({ href, text }: IProps) {
  return (
    <Link href={href}>
      <a className="inline-block px-5 py-3 bg-indigo-600 text-white rounded-sm text-sm cursor-pointer mr-2">
        {text}
      </a>
    </Link>
  );
}
