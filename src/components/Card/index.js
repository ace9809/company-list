/**
 * Created by Ace on 2018. 10. 7..
 */
/**
 * Created by Ace on 2018. 10. 6..
 */
import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100px;
  height: 80px;
  border: 1px solid black;
  padding: 10px;
`;


const Card = (props) => {
  console.log('props', props);
  console.log('name', props.company.name)
  const {
    category,
    location,
    name
  } = props.company;
  return (
    <Wrapper>
      {props.name}
      {location}
      {category}
    </Wrapper>
  )
};

export default Card;

