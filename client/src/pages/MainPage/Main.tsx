/*eslint-disable*/
import React from 'react';
import {
  IngProject,
  IngProjectButton,
  Endproject,
} from './styled';
import { Link, Route } from 'react-router-dom';
import Sliderbar from '../../components/Main/Sliderbar/Sliderbar';
import Categorybar from '../../components/Main/Categorybar/Categorybar';
import Servicebar from '../../components/Main/Servicebar/Servicebar';
import Reviewbar from '../../components/Main/Reviewbar/Reviewbar';
import Startprojectbar from '../../components/Main/Startprojectbar/Startprojectbar';
import Postcard from '../../components/Main/Postcard/Postcard';

const Main = () => {
  return (
    <Route exact path="/">
      <div>
        <Sliderbar />

        <Categorybar />

        <IngProject>
          <div>진행중인 프로젝트</div>
          <IngProjectButton>
            <div>모두 보기</div>
          </IngProjectButton>
        </IngProject>

        <Postcard />

        <Servicebar />

        <Endproject>
          <div>성사된 프로젝트</div>
          <IngProjectButton>
            <div>모두 보기</div>
          </IngProjectButton>
        </Endproject>

        <Postcard />

        <Reviewbar />

        <Startprojectbar />
      </div>
    </Route>
  );
};

export default Main;
