import { ChevronLeftIcon } from '@heroicons/react/24/outline';

interface ModalProps {
  text: string;
  onClick: () => void;
}

export default function ModalNav({ text, onClick }: ModalProps) {
  return (
    <div className="flex p-4 border-b">
      <ChevronLeftIcon
        onClick={onClick}
        className="block sm:hidden w-6 h-6 items-center text-gray-500 mr-2"
      />
      <h3 className="font-medium text-gray-700">{text}</h3>
    </div>
  );
}
