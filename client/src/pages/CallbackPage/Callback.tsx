import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { REACT_APP_API_URL } from 'config';
import axios from 'axios';
import { login } from 'store/login-slice';
function Callback() {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get('code');
    console.log(authorizationCode);
    if (authorizationCode) {
      axios
        .post(
          `
            ${REACT_APP_API_URL}/oauth/kakao`,
          {
            authorizationCode
          },
          {
            withCredentials: true
          }
        )
        .then((res) => {
          console.log('res', res);
          dispatch(login());
          history.push('/');
        })
        .catch((err) => console.log(err));
    }
  });
  return <div>카카오톡 로그인 중</div>;
}

export default Callback;
