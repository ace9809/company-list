/**
 * Created by Ace on 2018. 10. 7..
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Card from 'components/Card';
import SearchBar from 'components/SearchBar';
import { getCompanyList } from 'actions';

const Wrapper = styled.div`
  width: 100%;
`;

const CardListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 4%;
`;

class CardList extends Component {

  handleChange = (value) => {
    this.props.getCompanyList(value);
  };

  render() {
    console.log('this.props', this.props);
    return (
      <Wrapper>
        <SearchBar type="text" onSearchTerm={this.handleChange}/>
        <CardListWrapper>
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
        </CardListWrapper>
      </Wrapper>
    );
  }
}

export default connect(null, { getCompanyList })(CardList);
