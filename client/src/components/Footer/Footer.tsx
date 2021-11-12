import { Link } from 'react-router-dom';
import Jisik from '../../images/logo-gray.png';
import User from '../../images/user.png';
import Youtube from '../../images/youtube.png';
import Github from '../../images/github.png';
import Instagram from '../../images/instagram.png';
import {
  FooterContainer,
  FooterWrapper,
  TeamBox,
  MemberBox,
  MemberProfile,
  MemberInfo,
  Social,
  Copyright
} from './styled';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Link to="/">
          <img src={Jisik} alt="logo-image-footer" />
        </Link>
        <TeamBox>
          <MemberBox>
            <MemberProfile>
              <a href="https://github.com/LuckyTW">
                <img src={User} alt="user-image" />
              </a>
              <MemberInfo>
                <p>
                  <span>나태웅</span>
                  <span>Front end</span>
                </p>
                <span>skqkstjr2@gmail.com</span>
              </MemberInfo>
            </MemberProfile>
            <MemberProfile>
              <a href="https://github.com/seongjinpark1">
                <img src={User} alt="user-image" />
              </a>
              <MemberInfo>
                <p>
                  <span>박성진</span>
                  <span>Front end</span>
                </p>
                <span>blackdavil015@gmail.com</span>
              </MemberInfo>
            </MemberProfile>
            <MemberProfile>
              <a href="https://github.com/Built1994">
                <img src={User} alt="user-image" />
              </a>
              <MemberInfo>
                <p>
                  <span>조동현</span>
                  <span>Front end</span>
                </p>
                <span>donghyun7148@gmail.com</span>
              </MemberInfo>
            </MemberProfile>
            <MemberProfile>
              <a href="https://github.com/hanamon">
                <img src={User} alt="user-image" />
              </a>
              <MemberInfo>
                <p>
                  <span>박하나</span>
                  <span>Back end</span>
                </p>
                <span>devparkhana@gmail.com</span>
              </MemberInfo>
            </MemberProfile>
          </MemberBox>
          <Social>
            <a
              href="https://www.instagram.com/thehada___official/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={Instagram} />
            </a>
            <a
              href="https://github.com/codestates/JISIK-SPONSOR"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={Github} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCPq9cHp36WkxVWRyVghkPhQ"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={Youtube} />
            </a>
          </Social>
          <Copyright>
            Copyright ⓒ 2021 JISIK SPONSOR <br />
            &emsp;&emsp;The HADA Project Team
          </Copyright>
        </TeamBox>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
