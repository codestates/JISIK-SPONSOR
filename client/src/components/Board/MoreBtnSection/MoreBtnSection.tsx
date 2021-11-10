/*eslint-disable*/
import { Section, Wrap, ButtonWrap, BtnMessage, ShowButton } from './styled';

export interface Props {
  moreGetProjects: () => void;
  btnMessage: string;
}

const MoreBtnSection = ({ moreGetProjects, btnMessage }: Props) => {
  return (
    <Section>
      <Wrap>
        <ButtonWrap>
          {btnMessage ? (
            <BtnMessage>
              <span>{btnMessage && btnMessage}</span>
            </BtnMessage>
          ) : null}
          <ShowButton to="/board" onClick={() => moreGetProjects()}>
            프로젝트 더보기
          </ShowButton>
        </ButtonWrap>
      </Wrap>
    </Section>
  );
};

export default MoreBtnSection;
