import React from "react";
import { Route } from "react-router-dom";
import navData from "../navData";
import Nav from "./Nav";
import SubNav from "./SubNav";
import styled from "styled-components";

const StyledNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(45, 45, 45, 0.98);
  height: 44px;
  font-size: 17px;
`;

const StyledSubNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  background-color: rgba(242, 242, 242, 0.7);
  max-height: 100px;
`;

const StyledLogo = styled.img`
    position: relative;
    top: 3px;
    margin: 0 30px 0 0;
`;

class NavWrapper extends React.Component {
  render() {
    return (
      <>
        <StyledNav>
            <a href="/"><StyledLogo src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/apple/image_large.svg" alt="Apple"/></a>
          {navData.map(item => (
            <Nav key={item.id} menu={item} />
          ))}
        </StyledNav>

        <StyledSubNav>
          {navData.map(item => (
            <Route
              key={item.id}
              path={`/${item.title}`}
              render={props => <SubNav {...props} subLinks={item.subLink} />}
            />
          ))}
        </StyledSubNav>
      </>
    );
  }
}

export default NavWrapper;
