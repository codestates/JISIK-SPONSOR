/*eslint-disable*/
import styled from 'styled-components';
import allcategory from '../../images/allcategory.png';
import humanities from '../../images/humanities.png';
import social from '../../images/social.png';
import natural from '../../images/natural.png';
import engineering from '../../images/engineering.png';
import medicine from '../../images/medicine.png';
import agricultural from '../../images/agricultural.png';
import artistry from '../../images/artistry.png';
import combination from '../../images/combination.png';

export const Allcategory = styled.div`
  background-image: url(${allcategory});
  background-repeat: no-repeat;
  background-size: 150px;
  background-position: 18% 3%;
  padding: 30px;
  margin-left: 133px;
  margin-top: 30px;
  margin-bottom: 150px;
`;

export const BoardCategoryLine = styled.div`
  font-size: 20px;
  display: grid;
  grid-template-columns: repeat(4, 120px);
  column-gap: 35px;
  row-gap: 30px;

  color: #343a40;
  font-weight: 500;
  position: absolute;
  width: 45px;
  height: 22px;
  left: 650px;
  top: 108px;
`;

export const BoardHumanities = styled.div`
  background-image: url(${humanities});
  background-repeat: no-repeat;
  background-size: 30px;
  position: absolute;
  width: 30px;
  height: 30px;
  left: 610px;
  top: 105px;
`;

export const BoardSocial = styled.div`
  background-image: url(${social});
  background-repeat: no-repeat;
  background-size: 30px;
  position: absolute;
  width: 30px;
  height: 30px;
  left: 765px;
  top: 105px;
`;

export const BoardNatural = styled.div`
  background-image: url(${natural});
  background-repeat: no-repeat;
  background-size: 30px;
  position: absolute;
  width: 30px;
  height: 30px;
  left: 920px;
  top: 105px;
`;

export const BoardEngineering = styled.div`
  background-image: url(${engineering});
  background-repeat: no-repeat;
  background-size: 30px;
  position: absolute;
  width: 30px;
  height: 30px;
  left: 1075px;
  top: 105px;
`;

export const BoardMedicine = styled.div`
  background-image: url(${medicine});
  background-repeat: no-repeat;
  background-size: 30px;
  position: absolute;
  width: 30px;
  height: 30px;
  left: 610px;
  top: 154px;
`;

export const BoardAgricultural = styled.div`
  background-image: url(${agricultural});
  background-repeat: no-repeat;
  background-size: 30px;
  position: absolute;
  width: 30px;
  height: 30px;
  left: 765px;
  top: 154px;
`;

export const BoardArtistry = styled.div`
  background-image: url(${artistry});
  background-repeat: no-repeat;
  background-size: 30px;
  position: absolute;
  width: 30px;
  height: 30px;
  left: 920px;
  top: 154px;
`;

export const BoardCombination = styled.div`
  background-image: url(${combination});
  background-repeat: no-repeat;
  background-size: 30px;
  position: absolute;
  width: 30px;
  height: 30px;
  left: 1075px;
  top: 154px;
`;

export const SponsorButton = styled.button`
  background-color: #7950f2;
  color: #eee;
  border-radius: 10px;
  box-sizing: border-box;
  height: 58px;
  font-size: 20px;
  font-weight: 600;
  border: 1px solid #eee;
  margin: auto;
  margin-bottom: 50px;
  width: 18%;
  display: block;
`;
