import { Button } from '../Button/Button';
import { CountdownTimer } from '../Timer/CountdownTimer';

interface OfferBlockProps {
  onGetStarted: () => void;
  bgColor?: string;
  title?: string;
}

export const OfferBlock: React.FC<OfferBlockProps> = ({ onGetStarted, bgColor = "bg-gray-100", title = "Заповніть форму та отримайте доступ до курсу вже зараз" }) => {
  return (

    <div className={`rounded-3xl my-1 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col">
        <h2 className="text-xl text-black font-bold mb-4 uppercase">{title}</h2>
        <section className="mb-1">
          {/* Header */}
          <div className="text-gray-600 text-md font-bold mb-2">
            Спеціальна пропозиція:
          </div>

          {/* Main Stat */}
          <div className="flex items-center justify-between mb-4">
            <div className="text-gray-800 text-xl font-bold">
              Знижка 74%
            </div>
            <div className="flex items-center text-gray-800 text-xl font-bold">
              <span className="mr-1">та купа бонусів</span>
              <span>🎁</span>
            </div>
          </div>

          {/* Currency Values */}
          <div className="mb-4">
            <div className="text-gray-800 text-md font-bold">
              Вартість
            </div>
            <div className="flex space-x-2">
              <span className="text-gray-800 text-2xl font-bold">467 грн</span>
              <span className="text-gray-400 text-2xl font-bold relative after:absolute after:w-[110%] after:h-[2px] after:bg-red-500 after:left-[-5%] after:top-1/2 after:rotate-[-15deg]">1823 грн</span>
            </div>
          </div>

          {/* Timer */}
          <CountdownTimer
            initialSeconds={6299}
            className="text-gray-800 text-md font-bold mb-4"
            labelClassName="text-gray-800 text-md font-bold"
            timerClassName="font-bold text-2xl"
          />

          {/* Button */}
          <Button onGetStarted={onGetStarted} />
        </section>
      </div>
    </div>
  );
};
