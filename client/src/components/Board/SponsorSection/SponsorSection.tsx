/*eslint-disable*/
import React from 'react'
import {
    Section,
    Wrap,
    ButtonWrap,
    ShowButton
} from './styled';

const SponsorSection = () => {
    return (
        <Section>
            <Wrap>
                <ButtonWrap>
                    <ShowButton to="/detailed-project">프로젝트 후원하기</ShowButton>
                </ButtonWrap>
            </Wrap>
        </Section>
    )
}

export default SponsorSection