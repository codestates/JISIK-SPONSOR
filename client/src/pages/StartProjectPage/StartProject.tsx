import { useSelector } from 'react-redux';
import Nav from '../../components/StartProject/Nav/Nav';
import BasicInfo from 'components/StartProject/Basic/BasicInfo';
import BudgetInfo from 'components/StartProject/Budget/BudgetInfo';
import DetailsInfo from 'components/StartProject/Detail/DetailsInfo';
import { RootState } from 'index';
import TeamInfo from 'components/StartProject/Team/TeamInfo';

const StartProject = () => {
  const { basic, budget, details, team } = useSelector(
    (state: RootState) => state.page
  );
  return (
    <>
      <Nav />
      {basic && <BasicInfo />}
      {budget && <BudgetInfo />}
      {details && <DetailsInfo />}
      {team && <TeamInfo />}
    </>
  );
};

export default StartProject;
