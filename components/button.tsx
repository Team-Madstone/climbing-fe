interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-5 py-3 bg-indigo-600 text-white rounded-sm text-sm cursor-pointer"
    >
      {text}
    </button>
  );
}
