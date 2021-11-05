/*eslint-disable*/
import Sliderbar from '../../components/Main/Sliderbar/Sliderbar';
import InProgressSection from '../../components/Main/InProgressSection/InProgressSection';
import Categorybar from '../../components/Main/Categorybar/Categorybar';
import Servicebar from '../../components/Main/Servicebar/Servicebar';
import Reviewbar from '../../components/Main/Reviewbar/Reviewbar';
import AchievedSection from '../../components/Main/AchievedSection/AchievedSection';
import Startprojectbar from '../../components/Main/Startprojectbar/Startprojectbar';

const Main = () => {
  return (
    <div>
      <Sliderbar />
      <Categorybar />
      <InProgressSection />
      <Servicebar />
      <AchievedSection />
      <Reviewbar />
      <Startprojectbar />
    </div>
  );
};

export default Main;
