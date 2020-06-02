import React from "react";
import styled from "styled-components";

const HeaderTitle = styled.header`
  color: #040b13;
  font-family: PlayfairDisplay;
  font-weight: bold;
  align-self: auto;
  font-size: 30px;
`;

const HeaderDiv = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #000;
`;

const Header = () => {
  return (
    <HeaderDiv>
      <HeaderTitle>Duck Feed Reporter</HeaderTitle>
    </HeaderDiv>
  );
};

export default Header;
