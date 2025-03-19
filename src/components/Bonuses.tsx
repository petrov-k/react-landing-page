import { BonusCard } from './Bonus/BonusCard';
import { type Bonus } from '../data/bonuses';

interface BonusesProps {
  bonuses: Bonus[];
}

export const Bonuses: React.FC<BonusesProps> = ({ bonuses }) => {
  return (
    <section className="bg-gray-100 text-black text-left rounded-3xl mt-8" id="bonuses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 lg:py-16">
        <h2 className="text-4xl lg:text-4xl font-bold mb-6 uppercase">БОНУСИ</h2>
        <p className="text-lg lg:text-xl text-gray-700 font-semibold max-w-3xl mx-auto">
          При оплаті зараз, ви сплачуєте лише 467грн та отримуєте додатково ці <span className="text-purple-500 font-bold">чотири бонуси</span>:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mt-4">
          {bonuses.map((bonus, index) => (
            <BonusCard
              index={index + 1}
              title={bonus.title}
              image={bonus.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
