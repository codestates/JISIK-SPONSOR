import React, { useState, useEffect } from 'react';
import IntroSection from '../../components/DetailedProject/IntroSection/IntroSection';
import ProjectContent from 'components/DetailedProject/ProjectContent/ProjectContent';
import Profile from 'components/DetailedProject/Profile/Profile';
import Comments from 'components/DetailedProject/Comments/Comments';
import Sponsors from 'components/DetailedProject/Sponsors/Sponsors';
import TopButton from '../../images/icons/gotop-icon.png';
import { GoTopButton, ProjectContainer } from './styled';
import { REACT_APP_API_URL } from 'config';
import { useHistory } from 'react-router';
import axios from 'axios';
import { Data } from './type';

const DetailedProject = () => {
  const [pathName, setPathName] = useState<string>('');
  // const [favorite, setFavorite] = useState<boolean>(false);
  // const [title, setTitle] = useState<string>('');
  // const [description, setDescription] = useState<string>('');

  const history = useHistory();

  useEffect(() => {
    getProjects();
  }, []);

  // 특정 프로젝트에 대한 여러 데이터 불러오기
  const getProjects = async () => {
    try {
      const response = await axios.get<Data>(
        `${REACT_APP_API_URL}/projects/1`,
        {
          withCredentials: true
        }
      );

      // const { path, favorite };
      // console.log(response.data.path);
      console.log(response);
      // const path = response.data.projects.path;
      // console.log(path);
      console.log(pathName);
      setPathName('ss');
    } catch (err) {
      console.log(err);
      history.push('/404');
    }
  };

  // const favoriteHandler = async () => {
  //   try {
  //     if (!favorite) {
  //       const added = await axios.post(
  //         `${REACT_APP_API_URL}/posts/${pathName}/likes`,
  //         {},
  //         { withCredentials: true }
  //       );
  //       setFavorite(true);

  //       if (added.data.id) {
  //         const favoriteAdded = await axios.get(
  //           `${REACT_APP_API_URL}/posts/${pathName}/likes`,
  //           { withCredentials: true }
  //         );
  //         if (favoriteAdded.data.state) {
  //           setPosts({ ...posts, likes: posts.likes + 1 });
  //         }
  //       }
  //     } else {
  //       const unfavored = await axios.delete(
  //         `${REACT_APP_API_URL}/posts/${pathName}/likes`,
  //         {
  //           withCredentials: true
  //         }
  //       );

  //       if (unfavored.data.id) {
  //         const favoriteCancel = await axios.get(
  //           `${REACT_APP_API_URL}/posts/${pathName}/likes`,
  //           { withCredentials: true }
  //         );
  //         if (!favoriteCancel.data.state) {
  //           setPosts({ ...posts, likes: posts.likes - 1 });
  //         }
  //       }
  //       setLiked(false);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <ProjectContainer>
      <IntroSection />
      <ProjectContent />
      <Profile />
      <Comments />
      <Sponsors />
      <GoTopButton href="#">
        <img src={TopButton} alt="Top-button" />
      </GoTopButton>
    </ProjectContainer>
  );
};

export default DetailedProject;
