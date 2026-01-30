export const Button = ({ onClick, children }: { onClick: (e: React.MouseEvent) => void; children: string }) => {
  return (
    <button onClick={onClick} className="bg-primary-400 hover:bg-primary-500 rounded px-4 py-2 font-bold text-white">
      {children}
    </button>
  );
};
