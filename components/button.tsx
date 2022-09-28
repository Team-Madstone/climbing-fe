interface ButtonProps {
  type?: 'submit' | 'button';
  text: string;
  onClick?: () => void;
}

export default function Button({
  type = 'button',
  text,
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="px-5 py-3 bg-indigo-600 text-white rounded-sm text-sm cursor-pointer"
    >
      {text}
    </button>
  );
}
