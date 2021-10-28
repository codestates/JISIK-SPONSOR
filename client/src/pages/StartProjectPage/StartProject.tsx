import { useSelector } from 'react-redux';
import Nav from './Nav';
import BasicInfo from './BasicInfo';
import BudgetInfo from './BudgetInfo';
import DetailsInfo from './DetailsInfo';
import { RootState } from 'index';
import TeamInfo from './TeamInfo';

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
