const bgColorMap: Record<string, string> = {
  purple: 'bg-purple-500/30',
  orange: 'bg-orange-500/30',
  green: 'bg-green-500/30',
  blue: 'bg-blue-500/30',
  red: 'bg-red-500/30'
};

interface YouCanCardProps {
  index: number;
  title: string;
  heading: string;
  headingColor: string;
  description: string;
  isLast?: boolean;
}

export const YouCanCard: React.FC<YouCanCardProps> = ({ index, title, heading, headingColor, description, isLast = false }) => {
  return (
    <div className="h-full">
      <div className="flex flex-col h-full">
        {/* Heading */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <h3 className="text-4xl font-bold">{title}</h3>
          <h3 className="text-lg font-semibold shrink-0 inline-block bg-gray-200 text-black px-4 py-1 rounded-2xl shadow-md">{String(index).padStart(2, '0')}</h3>
        </div>

        {/* Heading  */}
        <div className="mb-2">
          <p className="text-lg lg:text-xl font-semibold">
            <span className="relative inline-block">
              <span className="relative z-10">&nbsp;{heading}</span>
              <span className={`absolute bottom-0 left-0 w-full h-5 lg:h-5 ${bgColorMap[headingColor]} -rotate-2`}></span>
            </span>
          </p>
        </div>

        {/* Description  */}
        <div className="mb-6">
          <p className="text-lg lg:text-xl font-semibold">{description}</p>
        </div>

        {/* Divider */}
        {!isLast && <div className="w-full h-px bg-gray-500 mt-auto"></div>}
      </div>
    </div>
  );
};
