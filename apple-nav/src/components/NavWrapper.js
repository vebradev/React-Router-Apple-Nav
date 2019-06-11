import React from "react";
import { Route } from "react-router-dom";
import navData from "../navData";
import Nav from "./Nav";
import SubNav from "./SubNav";
import styled from "styled-components";

const StyledHeader = styled.div`
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
  align-items: center;
  background-color: rgba(242, 242, 242, 0.7);
  max-height: 100px;
`;

class NavWrapper extends React.Component {
  render() {
    return (
      <>
        <StyledHeader>
          {navData.map(item => (
            <Nav key={item.id} menu={item} />
          ))}
        </StyledHeader>

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
