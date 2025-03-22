import Offer from '../components/Offer';
import { suitables } from '../data/suitables';
import { SuitableFor } from '../components/SuitableFor';
import { MobileNotice } from '../components/MobileNotice';
import { OfferBlock } from '../components/OfferBlock/OfferBlock';
import { Questions } from '../components/Questions';
import { YouCanSection } from '../components/YouCanSection';
import { youcans } from '../data/youcans';
import { Bonuses } from '../components/Bonuses';
import { bonuses } from '../data/bonuses';
import { AboutAuthor } from '../components/AboutAuthor';
import { Program } from '../components/Program';
import { SimpleOfferBlock } from '../components/OfferBlock/SimpleOfferBlock';
import { WhyThisWorks } from '../components/WhyThisWorks';
import { BigOfferBlock } from '../components/OfferBlock/BigOfferBlock';
import { Warranty } from '../components/Warranty';

const Home = () => {
  const handlePayment = () => {
    window.location.href = 'https://secure.wayforpay.com/button/bf588e3dc9c04';
  };

  return (
    <div className="flex flex-col min-h-screen bg-black px-2 md:px-4 lg:px-64">
      {/* Mobile-first optimization notice - only visible on large screens */}
      <MobileNotice />

      <Offer onGetStarted={handlePayment} />
      <SuitableFor suitables={suitables} />
      <OfferBlock onGetStarted={handlePayment} bgColor="bg-purple-200" />
      <YouCanSection youcans={youcans} />
      <Bonuses bonuses={bonuses} />
      <OfferBlock onGetStarted={handlePayment} bgColor="bg-green-200" />
      <AboutAuthor />
      <Program />
      <SimpleOfferBlock onGetStarted={handlePayment} />
      <WhyThisWorks />
      <Questions />
      <BigOfferBlock onGetStarted={handlePayment} />
      <Warranty />
    </div>
  );
};

export default Home;
