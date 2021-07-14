import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
  border-radius: 50px;
  background-color: #0001e8;
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '20px 50px')};
  //   color: ${({ dark }) => (dark ? '#26261C' : '#FFF')};
  color: white;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-transform: uppercase;
  font-weight: 700;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #3332ff;
    color: #fff;
  }
`;
