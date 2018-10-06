import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Header from 'components/Header';
import Card from 'components/Card';
import { getCompanyList } from 'actions';

import test from '../test.json';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
`;

class App extends Component {
  componentDidMount() {
    this.props.getCompanyList();
  }

  render() {
    return (
      <Wrapper>
        <Header />
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    companies: state.companies.companies,
    loading: state.companies.loading,
    error: state.companies.error
  }
}

export default connect(mapStateToProps, { getCompanyList })(App);