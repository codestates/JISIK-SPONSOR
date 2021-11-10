import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Section, Wrapper, TitleWrap, InputWrap } from './styled';
import { RootState } from 'index';
import { useHistory } from 'react-router';
import { showLoginModal } from 'store/modal-slice';
import axios from 'axios';
import { REACT_APP_API_URL } from 'config';
import { ProjectIdProps } from './type';
import { getProjectId } from 'store/projectState-slice';
function CreateTitle() {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLogin = useSelector((state: RootState) => state.login.isLogin);
  const [titleInput, setTitleInput] = useState<string>('');
  const handleProject = async () => {
    if (isLogin) {
      const response = await axios.post<ProjectIdProps>(
        `${REACT_APP_API_URL}/projects`,
        {
          title: titleInput
        },
        {
          withCredentials: true
        }
      );
      dispatch(getProjectId(response.data.id));
      history.push('/start-project');
    } else {
      dispatch(showLoginModal(true));
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Section>
      <Wrapper>
        <TitleWrap>
          <h1>당신의 프로젝트를 알려주세요!</h1>
          <p>프로젝트 제목을 알려서 새로운 실험을 시작하세요.</p>
        </TitleWrap>
        <InputWrap>
          <input
            type="text"
            id="title"
            placeholder="프로젝트의 제목을 작성해주세요!"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTitleInput(e.target.value)
            }
          />
          <button onClick={handleProject}>계속</button>
        </InputWrap>
      </Wrapper>
    </Section>
  );
}

export default CreateTitle;
