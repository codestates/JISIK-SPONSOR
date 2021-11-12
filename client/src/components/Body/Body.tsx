import About from 'pages/AboutPage/About';
import Board from 'pages/BoardPage/Board';
import DetailedProject from 'pages/DetailedProjectPage/DetailedProject';
import Error from 'pages/ErrorPage/Error';
import FAQ from 'pages/FAQPage/FAQ';
import Main from 'pages/MainPage/Main';
import MyPage from 'pages/MyPage/MyPage';
import Setting from 'pages/SettingPage/Setting';
import Start from 'pages/StartPage/Start';
import Callback from 'pages/CallbackPage/Callback';
import CallbackGoogle from 'pages/CallbackPage/CallbackGoogle';
import StartProject from 'pages/StartProjectPage/StartProject';
import { Route, Switch, Redirect } from 'react-router';
import { useSelector } from 'react-redux';
import { RootState } from 'index';

const Body = () => {
  const isLogin = useSelector((state: RootState) => state.login.isLogin);
  return (
    <main>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/board">
          <Board />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/detailed-project">
          <DetailedProject />
        </Route>
        <Route path="/error">
          <Error />
        </Route>
        <Route path="/faq">
          <FAQ />
        </Route>
        <Route path="/mypage">
          {isLogin ? <MyPage /> : <Redirect to="/" />}
        </Route>
        <Route path="/setting">
          {isLogin ? <Setting /> : <Redirect to="/" />}
        </Route>
        <Route path="/start-project">
          {isLogin ? <StartProject /> : <Redirect to="/" />}
        </Route>
        <Route path="/start">
          <Start />
        </Route>
        <Route path="/404">
          <Error />
        </Route>
        <Route path="/callback">
          <Callback />
        </Route>
        <Route path="/callbackGoogle">
          <CallbackGoogle />
        </Route>
        <Route path="/">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </main>
  );
};

export default Body;
