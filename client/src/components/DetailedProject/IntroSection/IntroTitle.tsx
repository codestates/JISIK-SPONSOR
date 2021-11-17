import { useEffect, useState } from 'react';
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
  projectId: number | null;
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

  // 즐겨찾기의 상태를 불러오는 함수
  const getFavoriteState = async () => {
    try {
      const response = await axios.get<FavState>(
        `${REACT_APP_API_URL}/projects/${projectId}/wishes`,
        { withCredentials: true }
      );
      setFavorite(response.data.state);
    } catch (err) {
      console.log(err);
    }
  };

  // 즐겨찾기의 상태를 변경하는 함수
  const FavoriteHandler = async () => {
    try {
      if (favorite === false) {
        await axios.post(
          `${REACT_APP_API_URL}/projects/${projectId}/wishes`,
          {},
          { withCredentials: true }
        );
        setFavorite(true);
      }
      if (favorite === true) {
        await axios.delete(
          `${REACT_APP_API_URL}/projects/${projectId}/wishes`,
          { withCredentials: true }
        );
        setFavorite(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // 로그인이 되었있다면, 즐겨찾기 상태값을 불러옴
  useEffect(() => {
    if (isLogin && projectId) getFavoriteState();
  }, []);

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
      {isLogin && (
        <>
          {favorite === true ? (
            <button onClick={FavoriteHandler}>
              <img src={YellowStar} alt="yellow-star" />
            </button>
          ) : (
            <button onClick={FavoriteHandler}>
              <img src={WhiteStar} alt="yellow-star" />
            </button>
          )}
        </>
      )}
    </Category>
  );
};

export default IntroTitle;
