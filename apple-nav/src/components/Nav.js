import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled(NavLink)`
    color: #fff;
    text-decoration: none;
    margin: 0 15px;

    &:hover {
        border-bottom: 2px solid #fff;
        margin-top: 2px;
    }
`;

class Nav extends React.Component {
  render() {
    return <StyledNav to={`/${this.props.menu.id}`}>{this.props.menu.title}</StyledNav>;
  }
}

export default Nav;
