import React, { Component } from 'react';
import styled from 'styled-components';
import Header from 'components/Header';
import Card from 'components/Card';
import test from '../test.json';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Card />
      </Wrapper>
    );
  }
}

export default App;