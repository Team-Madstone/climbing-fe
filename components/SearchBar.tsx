interface SearchBarProps {
  text: string;
  onClick?: () => void;
}

export default function SearchBar({ text, onClick }: SearchBarProps) {
  return (
    <input
      type="search"
      onClick={onClick}
      className="block text-sm font-medium text-gray-700 border-0 sm:border sm:border-gray-300 p-3 rounded-sm w-full bg-gray-200 sm:bg-transparent"
      placeholder={text}
    />
  );
}
