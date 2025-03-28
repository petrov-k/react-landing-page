import { Button } from '../Button/Button';
import { CountdownTimer } from '../Timer/CountdownTimer';

interface OfferBlockProps {
  onGetStarted: () => void;
}

export const BigOfferBlock: React.FC<OfferBlockProps> = ({ onGetStarted }) => {
  return (
    <div className="rounded-3xl my-8 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col">
        <h2 className="text-3xl text-black font-bold mb-4 uppercase"><span className="text-purple-500">Пропозиція обмежена у часі</span><br />приєднуйся до курсу вже зараз</h2>
        <div className="flex items-center justify-between bg-white rounded-3xl pl-3 py-4 shadow-lg">
          {/* Timer */}
          <CountdownTimer
            initialSeconds={6299}
            className="text-gray-800 text-xl font-bold"
            labelClassName="text-gray-800 text-md font-bold"
            timerClassName="font-bold text-3xl"
          />
        </div>

        {/* Currency Values */}
        <div className="flex items-center justify-between my-4">
          <div className="text-gray-800 text-2xl font-bold">
            Вартість
          </div>
          <div className="flex space-x-2">
            <span className="text-gray-800 text-2xl font-bold">371 грн</span>
            <span className="text-gray-400 text-2xl font-bold relative after:absolute after:w-[110%] after:h-[2px] after:bg-red-500 after:left-[-5%] after:top-1/2 after:rotate-[-15deg]">1427 грн</span>
          </div>
        </div>

        {/* Main Stat */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-gray-800 text-2xl font-bold">
            Знижка
          </div>
          <div className="text-gray-800 text-2xl font-bold bg-red-500/50 rounded-3xl px-3 py-1">
            -74%
          </div>

        </div>

        <section className="mt-4 rounded-3xl bg-purple-500 p-4">
          {/* Header */}
          <h2 className="text-xl text-white font-bold mb-4 uppercase">Заповніть форму та отримайте доступ до курсу вже зараз</h2>

          {/* Button */}
          <Button onGetStarted={onGetStarted} />
        </section>
      </div>
    </div>
  );
};
