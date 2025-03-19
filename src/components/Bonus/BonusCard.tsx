interface BonusCardProps {
  index: number;
  title: string;
  image: string;
}

export const BonusCard: React.FC<BonusCardProps> = ({ index, title, image }) => {
  return (
    <div className="h-full">
      <div className="flex flex-col h-full">
        {/* Divider */}
        <div className="w-full h-px bg-gray-500 mt-auto mb-4"></div>

        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-bold">🎁 БОНУС</h2>
          <h2 className="text-2xl rounded-full bg-gray-200 px-6 py-1 shadow-md">{String(index).padStart(2, '0')}</h2>
        </div>

        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <img src={image} alt={title} className="w-full h-auto rounded-3xl" />
      </div>
    </div>
  );
};
