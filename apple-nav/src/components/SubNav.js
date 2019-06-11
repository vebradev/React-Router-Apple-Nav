import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledSubNav = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #111;
  font-size: 13px;
  text-decoration: none;
  margin: 0 15px;
  text-align: center;
  padding: 20px 0;
  transition: .5s all;

  &:hover {
    color: #0070c9;
  }

  img {
      display: block;
      max-width: 48px;
      max-height: 54px;
  }
`;

function SubNav(props) {
  return (
    <>
      {props.subLinks.map(item => (
        <StyledSubNav key={item.id} to="#">
          <img src={item.imageUrl} alt={item.title}/>
          {item.title}
        </StyledSubNav>
      ))}
    </>
  );
}

export default SubNav;
