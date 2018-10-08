import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CardList from './../CardList';
import Header from '../../components/Header';
import { getCompanyList } from '../../actions';

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
        <CardList companies={this.props.companies} count={this.props.count} />
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    companies: state.companies.companies,
    count: state.companies.count,
  }
}

App.propTypes = {
  companies: PropTypes.array,
  count: PropTypes.number
};

export default connect(mapStateToProps, { getCompanyList })(App);
