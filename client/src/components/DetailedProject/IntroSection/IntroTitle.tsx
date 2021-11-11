import React, { useEffect, useState } from 'react';
import { REACT_APP_API_URL } from 'config';
import { FavState } from '../type';
import { Category } from './styled';
import axios from 'axios';

import CategoryIcon1 from '../../../images/icons/category-icon-1.png';
import CategoryIcon2 from '../../../images/icons/category-icon-2.png';
import CategoryIcon3 from '../../../images/icons/category-icon-3.png';
import CategoryIcon4 from '../../../images/icons/category-icon-4.png';
import CategoryIcon5 from '../../../images/icons/category-icon-5.png';
import CategoryIcon6 from '../../../images/icons/category-icon-6.png';
import CategoryIcon7 from '../../../images/icons/category-icon-7.png';
import CategoryIcon8 from '../../../images/icons/category-icon-8.png';
import YellowStar from '../../../images/star-yellow.png';
import WhiteStar from '../../../images/star-white.png';

interface IntroTitleProps {
  isLogin: boolean;
  projectId: number;
  categoryId: number;
  category: string;
}

const IntroTitle = ({
  isLogin,
  projectId,
  categoryId,
  category
}: IntroTitleProps) => {
  const [favorite, setFavorite] = useState<boolean>(false);

  useEffect(() => {
    if (isLogin) {
      getFavoriteState();
    }
  }, []);

  const WishesUrl = `${REACT_APP_API_URL}/projects/${projectId}/wishes`;
  const config = { withCredentials: true };

  // 즐겨찾기의 상태를 불러오는 함수
  const getFavoriteState = async () => {
    try {
      const response = await axios.get<FavState>(WishesUrl, config);
      const state = response.data.state;
      setFavorite(state);
    } catch (err) {
      console.log(err);
    }
  };

  // 즐겨찾기의 상태를 변경하는 함수
  const FavoriteHandler = async () => {
    try {
      if (!favorite) {
        await axios.post(WishesUrl, {}, config);
        setFavorite(true);
      } else {
        await axios.delete(WishesUrl, config);
        setFavorite(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Category>
      <div>
        {categoryId === 1 && <img src={CategoryIcon1} alt="category-icon" />}
        {categoryId === 2 && <img src={CategoryIcon2} alt="category-icon" />}
        {categoryId === 3 && <img src={CategoryIcon3} alt="category-icon" />}
        {categoryId === 4 && <img src={CategoryIcon4} alt="category-icon" />}
        {categoryId === 5 && <img src={CategoryIcon5} alt="category-icon" />}
        {categoryId === 6 && <img src={CategoryIcon6} alt="category-icon" />}
        {categoryId === 7 && <img src={CategoryIcon7} alt="category-icon" />}
        {categoryId === 8 && <img src={CategoryIcon8} alt="category-icon" />}
        <span>{category}</span>
      </div>
      {isLogin && !favorite && (
        <button onClick={FavoriteHandler}>
          <img src={WhiteStar} alt="yellow-star" />
        </button>
      )}
      {isLogin && favorite && (
        <button onClick={FavoriteHandler}>
          <img src={YellowStar} alt="yellow-star" />
        </button>
      )}
    </Category>
  );
};

export default IntroTitle;
