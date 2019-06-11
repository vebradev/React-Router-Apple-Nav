import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  margin: 0 35px;
  transition: 0.5s all;

  &:hover {
    opacity: 0.6;
  }
`;

class Nav extends React.Component {
  render() {
    const title = this.props.menu.title.toLowerCase();
    return (
      <>
        <StyledNav to={`/${title}`}>{this.props.menu.title}</StyledNav>
      </>
    );
  }
}

export default Nav;
