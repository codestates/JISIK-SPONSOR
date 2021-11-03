import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore, PERSIST } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import loginSlice, { authentification } from 'store/login-slice';
import modalSlice, { modal } from 'store/modal-slice';
import PageBtSlice, { button } from 'store/startPageBt-slice';
import myPageTabSlice, { MyPageTabs } from 'store/mypage-slice';
import settingBtSlice, { settingBt } from 'store/settingPageBt-silce';
import userInfoSlice, { UserInfoProps } from 'store/userInfo-slice';
import projectState, { projectStateProps } from 'store/projectState-slice';

// persistConfig는 새로운 persist를 선언한다.
// key: reducer의 어느 지점에서부터 데이터를 저장할 것인지
// storage: 웹의 localstorage를 뜻한다.

const persistConfig = {
  key: 'root',
  version: 1,
  storage
};

const rootReducer = combineReducers({
  login: loginSlice,
  modal: modalSlice,
  page: PageBtSlice,
  myPage: myPageTabSlice,
  settingBt: settingBtSlice,
  userInfo: userInfoSlice,
  projectSt: projectState
});

// persistReducer는 persisConfig가 추가된 reducer을 반환한다.
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST]
      }
    })
});
export interface RootState {
  login: authentification;
  modal: modal;
  page: button;
  myPage: MyPageTabs;
  settingBt: settingBt;
  userInfo: UserInfoProps;
  projectSt: projectStateProps;
}
// persistStore는 새로고침, 종료해도 지속될 store생성
let persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
