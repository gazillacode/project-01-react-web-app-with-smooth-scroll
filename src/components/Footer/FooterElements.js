import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: black;
  padding: 20px 0;
  border-top: 1px solid white;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  padding: 0 25px;

  @media screen and (min-width: 992px) {
    flex-direction: row;
  }
`;

export const SocialLogo = styled(Link)`
  color: white;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-top: 16px;
  @media screen and (min-width: 992px) {
    margin-top: 0;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  transition: 0.2s all ease-in-out;

  :hover {
    color: #0001e8;
  }
`;
