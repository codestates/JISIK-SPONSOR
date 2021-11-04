/*eslint-disable*/
import styled from 'styled-components';
import flower from '../../../images/flower.png';

export const Flower = styled.div`
  background-image: url(${flower});
  background-repeat: no-repeat;
  background-size: 20%;
  padding: 40px;
  padding-bottom: 100px;

  width: 100%;
  max-width: 700px;
  margin: 0 auto;
`;

export const CategoryLine = styled.div`
  font-size: 20px;
  display: grid;
  grid-template-columns: repeat(4, 140px);
  column-gap: 15px;
  row-gap: 25px;
  color: #343a40;
  font-weight: 500;

  max-width: 280px;
  margin: 0 auto;
`;
