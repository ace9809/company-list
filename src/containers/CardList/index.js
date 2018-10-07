/**
 * Created by Ace on 2018. 10. 7..
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import styled from 'styled-components';
import Card from 'components/Card';
import SearchBar from 'components/SearchBar';
import Slick from 'components/Slick';
import { getCompanyList } from 'actions';

const Wrapper = styled.div`
  width: 100%;
`;

const CardListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 4%;
`;

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      area: '',
      name: ''
    };
  }
  nameSetState = (value) => {
    this.setState({ name: value })
    this.debounceSerachCompanies();
  };

  areaSetState = (value) => {
    this.setState({ area: value })
    this.debounceSerachCompanies();
  };

  serachCompanies = () => {
    this.props.getCompanyList(this.state);
  };

  debounceSerachCompanies = _.debounce(value => {
    this.serachCompanies(value);
  }, 1000);

  render() {
    return (
      <Wrapper>
        <Slick onSearchTerm={this.areaSetState} />
        <SearchBar type="text" onSearchTerm={this.nameSetState} />
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
