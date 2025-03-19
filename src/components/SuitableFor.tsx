import { SuitableForCard } from './SuitableFor/SuitableForCard';
import { type Suitable } from '../data/suitables';

interface SuitableForProps {
  suitables: Suitable[];
}

export const SuitableFor: React.FC<SuitableForProps> = ({ suitables }) => {
  return (
    <section className="py-8 lg:py-16 bg-gray-100 text-black text-left rounded-3xl" id="suitable-for">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">
          ЦЕЙ КУРC - ТВІЙ, ЯКЩО ТИ...
        </h2>
        <h5 className="text-lg lg:text-2xl font-bold mb-4">
          <span className="text-purple-500">У кожного є свої витрати та доходи</span>, цей курс для тих хто хоче навести лад у своїх фінансах, незалежно від професії ти стилю життя
        </h5>

        {/* Divider */}
        <div className="w-full h-px bg-gray-500 mb-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {suitables.map((suitable, index) => (
            <SuitableForCard
              index={index + 1}
              title={suitable.title}
              description={suitable.description}
              image={suitable.image}
              tags={suitable.tags}
            />
          ))}
        </div>

        <p className="text-lg mt-8 lg:text-xl font-semibold">
          Не важливо, хто ти за професією чи статусом — якщо ти хочеш, щоб гроші стали
          <span className="relative inline-block">
            <span className="relative z-10">&nbsp;твоїм союзником</span>
            <span className="absolute bottom-0 left-0 w-full h-5 lg:h-5 bg-purple-500/30 -rotate-2"></span>
          </span>
          , цей курс для тебе! Не пропусти шанс змінити своє життя — місця обмежені!
        </p>
      </div>
    </section>
  );
};

