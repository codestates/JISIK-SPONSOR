/*eslint-disable*/
import { Section, Wrap, ButtonWrap, ShowButton } from './styled';

export interface Props {
  moreGetProjects: () => void;
  btnMessage: string;
}

const MoreBtnSection = ({ moreGetProjects, btnMessage }: Props) => {
  return (
    <Section>
      <Wrap>
        <ButtonWrap>
          <div>
            <span>{btnMessage && btnMessage}</span>
          </div>
          <ShowButton to="/board" onClick={() => moreGetProjects()}>
            프로젝트 후원하기
          </ShowButton>
        </ButtonWrap>
      </Wrap>
    </Section>
  );
};

export default MoreBtnSection;
