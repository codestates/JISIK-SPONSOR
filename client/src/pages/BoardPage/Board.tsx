/*eslint-disable*/
import React from 'react';
import { Link, Route } from 'react-router-dom';
import CategorySection from '../../components/Board/CategorySection/CategorySection';
import SponsorSection from '../../components/Board/SponsorSection/SponsorSection';
import PostcardSection from 'components/Board/PostcardSection/PostcardSection';

const Board = () => {
  return (
    <Route path="/board">
      <div>
        <CategorySection />
        <PostcardSection />
        <SponsorSection />
      </div>
    </Route>
  );
};

export default Board;
