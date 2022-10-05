import { classNames } from '../shared/share';

interface IProps {
  type?: 'submit' | 'button';
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  styling?: 'fullBtn' | 'normal';
}

export default function Button({
  type = 'button',
  text,
  onClick,
  disabled,
  styling,
}: IProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        `px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-sm text-sm cursor-pointer disabled:bg-indigo-200`,
        styling === 'fullBtn' &&
          `flex w-full justify-center disabled:bg-indigo-200`
      )}
    >
      {text}
    </button>
  );
}
