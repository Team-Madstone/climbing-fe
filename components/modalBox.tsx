interface ModalBoxProps {
  children: React.ReactNode;
}

export default function ModalBox({ children }: ModalBoxProps) {
  return (
    <div className="fixed sm:absolute w-full h-full overflow-hidden sm:w-[500px] sm:h-auto sm:overflow-auto0 rounded-sm top-0 sm:top-8 bg-white border-0 sm:border z-20">
      <div className="mb-24 sm:mb-2">{children}</div>
    </div>
  );
}
