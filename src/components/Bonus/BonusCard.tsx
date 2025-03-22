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
        <div className="w-full h-px bg-gray-300 mb-4"></div>

        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-bold">🎁 БОНУС</h2>
          <h2 className="text-2xl rounded-full bg-gray-200 px-6 py-1 shadow-md">{String(index).padStart(2, '0')}</h2>
        </div>

        <h3 className="text-xl lg:text-2xl font-bold mb-4 min-h-[3em] flex items-center">{title}</h3>

        <div className="relative aspect-[4/3] mt-auto">
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
};
