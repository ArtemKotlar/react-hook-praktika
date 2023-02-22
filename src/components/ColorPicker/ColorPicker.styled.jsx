import styled from 'styled-components';

export const Btn = styled.button`
  display: inline-block;
  width: 50px;
  height: 50px;
  margin: 15px;
  border: none;
  cursor: pointer;
  transition: transform 250ms linear;
  :hover,
  :focus {
    transform: scale(1.2);
  }
`;
