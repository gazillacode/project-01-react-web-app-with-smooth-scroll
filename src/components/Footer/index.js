import React from 'react';
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
  FooterContainer,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './FooterElements';

const toggleHome = () => {
  scroll.scrollToTop();
};

const Footer = () => {
  return (
    <FooterContainer>
      <SocialMediaWrap>
        <SocialLogo to='/' onClick={toggleHome}>
          DemoProject
        </SocialLogo>
        <SocialIcons>
          <SocialIconLink
            href='//www.linkedin.com/in/garypage/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
          >
            <FaLinkedin />
          </SocialIconLink>
          <SocialIconLink
            href='//twitter.com/gazillacode'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Twitter'
          >
            <FaTwitter />
          </SocialIconLink>
          <SocialIconLink
            href='//www.instagram.com/gazillacode/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Instagram'
          >
            <FaInstagram />
          </SocialIconLink>
          <SocialIconLink
            href='//github.com/gazillacode'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Github'
          >
            <FaGithub />
          </SocialIconLink>
        </SocialIcons>
        <WebsiteRights>
          DemoProject © {new Date().getFullYear()} | All rights reserved.
        </WebsiteRights>
      </SocialMediaWrap>
    </FooterContainer>
  );
};

export default Footer;
