import { YouCanCard } from './YouCan/YouCanCard';
import { type YouCan } from '../data/youcans';

interface YouCanSectionProps {
  youcans: YouCan[];
}

export const YouCanSection: React.FC<YouCanSectionProps> = ({ youcans }) => {
  return (
    <section className="pt-8 pb-4 mt-8 lg:py-16 bg-gray-100 text-black text-left rounded-3xl" id="you-can">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">
          ПІСЛЯ КУРСУ<br /> ТИ ЗМОЖЕШ
        </h2>
        <h5 className="text-lg lg:text-2xl font-bold mb-4">
          Пройшовши курс до кінця, ти не просто навчишся управляти грошима — <span className="text-orange-500">ти зміниш свої звички</span>, які повпливають на все твоє життя!
          Ось що саме ти зможеш після курсу:
        </h5>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {youcans.map((youcan, index) => (
            <YouCanCard
              index={index + 1}
              title={youcan.title}
              heading={youcan.heading}
              headingColor={youcan.headingColor}
              description={youcan.description}
              isLast={youcan.isLast}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
