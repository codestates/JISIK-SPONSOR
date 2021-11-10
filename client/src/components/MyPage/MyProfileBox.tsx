import { MyprofileBox, MyprofileBoxMini } from './styled';
import { logout } from 'store/login-slice';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { REACT_APP_API_URL } from 'config';
import axios from 'axios';
import Baksa from '../../images/baksa.png';
import { RootState } from 'index';

const MyProfileBox = () => {
  const dispatch = useDispatch();
  const history = useHistory();

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

  return (
    <MyprofileBox>
      <MyprofileBoxMini>
        <img
          src={
            userInfo.profile_url
              ? 'https://jisiksponsor.com' + userInfo.profile_url
              : Baksa
          }
          alt="baksa image"
        />
        <span>
          {userInfo.name}
          <small>({userInfo.nickname})</small>
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
