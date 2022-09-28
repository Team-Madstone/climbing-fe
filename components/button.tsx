interface IProps {
  type?: 'submit' | 'button';
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  type = 'button',
  text,
  onClick,
  disabled,
}: IProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="px-5 py-3 bg-indigo-600 text-white rounded-sm text-sm cursor-pointer"
    >
      {text}
    </button>
  );
}
