import { Button } from "../Button/Button";

interface OfferBlockProps {
  onGetStarted: () => void;
}

export const SimpleOfferBlock: React.FC<OfferBlockProps> = ({ onGetStarted }) => {
  return (
    <div className="bg-yellow-200 rounded-3xl mt-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col">
        <h2 className="text-xl text-black font-bold mb-4 uppercase">Слухай, ну це вже коштує більше ніж 371 грн, <br /><span className="text-orange-500">серйозно</span></h2>
        <h3 className="text-lg text-black font-bold mb-4 uppercase">реєструйся зараз</h3>
        {/* Button */}
        <Button onGetStarted={onGetStarted} />
      </div>
    </div>
  );
};
