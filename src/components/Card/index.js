/**
 * Created by Ace on 2018. 10. 7..
 */
import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 10px;
  width: 250px;
  height: 200px;
  border: 1px solid #DCE0DC;
  display: flex;
  flex-wrap: wrap;
`;

const CardInfoWrapper = styled.div`
  width: 100%;
  padding: 20px 20px 0 20px;
  border-bottom: 1px solid #DCE0DC;
`;

const TitleWrapper = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

const LocationWrapper = styled.div`
  margin-top: 10px;
  height: 60px;
`;

const CategoryWrapper = styled.div`
  margin-top: 10px;
  color: #999;
`;

const HearWrapper = styled.div`
  color: #999;
`;

const Card = (props) => {
  const {
    category,
    location,
    name,
    heart
  } = props.company;
  return (
    <Wrapper>
      <CardInfoWrapper>
        <TitleWrapper>
          {name}
        </TitleWrapper>
        <LocationWrapper>
          {location}
        </LocationWrapper>
        <CategoryWrapper>
          #{category}
        </CategoryWrapper>
      </CardInfoWrapper>
      <HearWrapper>
        <input type="checkbox" />
        {heart}
      </HearWrapper>
    </Wrapper>
  )
};

export default Card;

