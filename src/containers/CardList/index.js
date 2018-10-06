/**
 * Created by Ace on 2018. 10. 7..
 */
import React, { Component } from 'react';
import styled from 'styled-components';
import Card from 'components/Card';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 4%;
`;

class CardList extends Component {

  render() {
    console.log('this.props', this.props);
    return (
      <Wrapper>
        {
          this.props.companies.map((company, index) => {
            return (
              <Card
                key={index}
                company={company}
              />
            )
          })
        }
      </Wrapper>
    );
  }
}

export default CardList;

