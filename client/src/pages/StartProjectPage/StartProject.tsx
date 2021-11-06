import { useDispatch, useSelector } from 'react-redux';
import Nav from '../../components/StartProject/Nav/Nav';
import BasicInfo from 'components/StartProject/Basic/BasicInfo';
import BudgetInfo from 'components/StartProject/Budget/BudgetInfo';
import DetailsInfo from 'components/StartProject/Detail/DetailsInfo';
import { RootState } from 'index';
import TeamInfo from 'components/StartProject/Team/TeamInfo';
import { useEffect } from 'react';
import { REACT_APP_API_URL } from 'config';
import { BasicObject } from 'components/StartProject/Basic/type';
import axios from 'axios';
import { getProjectState } from 'store/project-slice';
import { getTeamId } from 'store/projectState-slice';

const StartProject = () => {
  const dispatch = useDispatch();
  const { basic, budget, details, team } = useSelector(
    (state: RootState) => state.page
  );
  const projectId = useSelector((state: RootState) => state.projectSt.id);
  useEffect(() => {
    axios
      .get<BasicObject>(`${REACT_APP_API_URL}/projects/${projectId}`, {
        withCredentials: true
      })
      .then((res) => {
        dispatch(getProjectState(res.data.projects));
        dispatch(getTeamId(res.data.projects.project_teams[0].id));
      });
  }, [basic, budget, details, team]);
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
