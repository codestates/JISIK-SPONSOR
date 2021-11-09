import React from 'react';
import { MyprofileBox, MyprofileBoxMini } from './styled';
import { logout } from 'store/login-slice';
// import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { REACT_APP_API_URL } from 'config';
import axios from 'axios';

import Baksa from '../../images/baksa.png';

const MyProfileBox = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await axios.post(
        `
      ${REACT_APP_API_URL}/logout`,
        {},
        {
          withCredentials: true
        }
      );
      dispatch(logout());
      localStorage.removeItem('abc');
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  const moveTosettings = () => {
    history.push('/setting');
  };

  return (
    <MyprofileBox>
      <MyprofileBoxMini>
        <img src={Baksa} alt="baksa image" />
        <span>나박사</span>
        <p>안녕하세요. 나박사입니다.</p>
        <div>
          <button onClick={moveTosettings}>프로필 설정</button>
          <button onClick={handleLogout}>로그아웃</button>
        </div>
      </MyprofileBoxMini>
    </MyprofileBox>
  );
};

export default MyProfileBox;
