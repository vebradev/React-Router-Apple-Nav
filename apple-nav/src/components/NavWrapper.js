import React from "react";
import Nav from "./Nav";
import navData from "../navData";
import styled from "styled-components";

const StyledHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(45,45,45,0.98);
    height: 44px;
    font-size: 17px;
`;

class NavWrapper extends React.Component {
  render() {
    return (
      <StyledHeader>
        {navData.map(item => (
          <Nav key={item.id} menu={item} />
        ))}
      </StyledHeader>
    );
  }
}

export default NavWrapper;
