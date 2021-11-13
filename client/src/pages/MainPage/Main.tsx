/*eslint-disable*/
import { useEffect } from 'react';
import SliderSection from '../../components/Main/SliderSection/SliderSection';
import InProgressSection from '../../components/Main/InProgressSection/InProgressSection';
import CategorySection from '../../components/Main/CategorySection/CategorySection';
import ServiceSection from '../../components/Main/ServiceSection/ServiceSection';
import ReviewSection from '../../components/Main/ReviewSection/ReviewSection';
import AchievedSection from '../../components/Main/AchievedSection/AchievedSection';
import StartProjectSection from '../../components/Main/StartProjectSection/StartProjectSection';
import { GoTopButton } from './styled';
import TopButton from '../../images/icons/gotop-icon.png';

const Main = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <SliderSection />
      <CategorySection />
      <InProgressSection />
      <ServiceSection />
      <AchievedSection />
      <ReviewSection />
      <StartProjectSection />
      <GoTopButton href="#">
        <img src={TopButton} alt="Top-button" />
      </GoTopButton>
    </div>
  );
};

export default Main;
