/**
 * Created by Ace on 2018. 10. 6..
 */
import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  widht: 100%;
  height: 70px;
  background-color: #3b3b3b;
  display: flex;
  align-items: center;
`;

const TitleWrapper = styled.div`
  margin-left: 15px;
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

const Header = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        산업체검색 페이지
      </TitleWrapper>
    </Wrapper>
  )
};

export default Header;

