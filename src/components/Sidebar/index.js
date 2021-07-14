import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  //   SidebarBtnWrap,
  SidebarLink,
  //   SidebarRoute,
} from './SideBarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to='about'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            onClick={toggle}
          >
            About
          </SidebarLink>
          {/* <SidebarLink to='discover' onClick={toggle}>
            Discover
          </SidebarLink> */}
          <SidebarLink
            to='additions'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            onClick={toggle}
          >
            Discover
          </SidebarLink>
          <SidebarLink
            to='signup'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            onClick={toggle}
          >
            Contact
          </SidebarLink>
        </SidebarMenu>
        {/* <SidebarBtnWrap>
          <SidebarRoute to='/signin'>Sign In</SidebarRoute>
        </SidebarBtnWrap> */}
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
