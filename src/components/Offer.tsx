import { HeadingOffer } from './Offer/HeadingOffer';
import { PhotoOffer } from './Offer/PhotoOffer';
import { PriceOffer } from './Offer/PriceOffer';
import { PostOffer } from './Offer/PostOffer';

interface OfferProps {
  onGetStarted: () => void;
}

const Offer: React.FC<OfferProps> = ({ onGetStarted }) => {
  return (
    <div>
      <HeadingOffer />
      <PhotoOffer />
      <PriceOffer onGetStarted={onGetStarted} />
      <PostOffer />
    </div>
  );
};

export default Offer;
