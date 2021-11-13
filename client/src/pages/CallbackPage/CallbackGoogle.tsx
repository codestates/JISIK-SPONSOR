import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { REACT_APP_API_URL } from 'config';
import axios from 'axios';
import { login } from 'store/login-slice';
import { CallbackContainer } from './styled';
function CallbackGoogle() {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get('code');

    if (authorizationCode) {
      axios
        .post(
          `${REACT_APP_API_URL}/oauth/google`,
          { authorizationCode },
          { withCredentials: true }
        )
        .then(() => {
          dispatch(login());
          history.push('/');
        })
        .catch((err) => {
          console.log(err);
          // history.push('/');
        });
    }
  });
  return (
    <CallbackContainer>
      <p>
        세상에 꼭 필요한 연구를 위한
        <br />
        크라우드 펀딩 플랫폼
      </p>
      <h1>
        <span>J</span>
        <span>I</span>
        <span>S</span>
        <span>I</span>
        <span>K</span>
        <span>S</span>
        <span>P</span>
        <span>O</span>
        <span>N</span>
        <span>S</span>
        <span>O</span>
        <span>R</span>
      </h1>
    </CallbackContainer>
  );
}

export default CallbackGoogle;
