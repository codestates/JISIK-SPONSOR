/*eslint-disable*/
import React from 'react';
import { Link, Route } from 'react-router-dom';
import Postcard from '../../components/Main/Postcard/Postcard';
import {
  Allcategory,
  BoardCategoryLine,
  BoardHumanities,
  BoardSocial,
  BoardNatural,
  BoardEngineering,
  BoardMedicine,
  BoardAgricultural,
  BoardArtistry,
  BoardCombination,
  SponsorButton
} from './styled';

const Board = () => {
  return (
    <Route path="/board">
      <div>
        <Allcategory></Allcategory>
        <BoardHumanities></BoardHumanities>
        <BoardSocial></BoardSocial>
        <BoardNatural></BoardNatural>
        <BoardEngineering></BoardEngineering>
        <BoardMedicine></BoardMedicine>
        <BoardAgricultural></BoardAgricultural>
        <BoardArtistry></BoardArtistry>
        <BoardCombination></BoardCombination>

        <ul>
          <BoardCategoryLine>
            <li>
              <a>인문학</a>
            </li>
            <li>
              <a>사회과학</a>
            </li>
            <li>
              <a>자연과학</a>
            </li>
            <li>
              <a>공학</a>
            </li>
            <li>
              <a>의약학</a>
            </li>
            <li>
              <a>농수해양학</a>
            </li>
            <li>
              <a>예술체육학</a>
            </li>
            <li>
              <a>복합학</a>
            </li>
          </BoardCategoryLine>
        </ul>

        {/* <Postcard /> */}

        <Link to="/startproject">
          <SponsorButton>
            <div>프로젝트 시작하기</div>
          </SponsorButton>
        </Link>
      </div>
    </Route>
  );
};

export default Board;
