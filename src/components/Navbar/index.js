import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = () => {
  return <>
      <Nav>
          <NavLink to="/">
              <h1>Logo</h1>
          </NavLink>
          <Bars />
          <NavMenu>
              <NavLink to="/" activeStyle>
                  Home
              </NavLink>
              <NavLink to="/about-us" activeStyle>
                  About Us
              </NavLink>
              <NavLink to="/product" activeStyle>
                  Product
              </NavLink>
              <NavLink to="/blog" activeStyle>
                  Blog
              </NavLink>
              <NavLink to="/contact" activeStyle>
                  Contact
              </NavLink>
          </NavMenu>
          <NavBtn>
              <NavBtnLink to='/search'>Search</NavBtnLink>
          </NavBtn>
      </Nav>
  </>;
};

export default Navbar;
