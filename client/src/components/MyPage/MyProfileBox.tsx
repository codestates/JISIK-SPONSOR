import { MyprofileBox, MyprofileBoxMini } from './styled';
import { logout } from 'store/login-slice';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { REACT_APP_API_URL } from 'config';
import axios from 'axios';
import User from '../../images/user.png';
import { RootState } from 'index';
import { useState, useEffect } from 'react';

const MyProfileBox = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [image, setImage] = useState<any>(User);
  const userInfo = useSelector((state: RootState) => state.userInfo.userInfo);

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

  useEffect(() => {
    if (userInfo.profile_url) {
      const http = userInfo.profile_url?.slice(0, 4);
      if (http === 'http') {
        setImage(userInfo.profile_url);
      } else {
        setImage('https://jisiksponsor.com' + userInfo.profile_url);
      }
    }
  }, [userInfo]);

  return (
    <MyprofileBox>
      <MyprofileBoxMini>
        <img src={image} />
        <span>
          {userInfo.name}
          <small>{userInfo.nickname && '(' + userInfo.nickname + ')'}</small>
        </span>
        <p>{userInfo.bio}</p>
        <div>
          <button onClick={moveTosettings}>프로필 설정</button>
          <button onClick={handleLogout}>로그아웃</button>
        </div>
      </MyprofileBoxMini>
    </MyprofileBox>
  );
};

export default MyProfileBox;
