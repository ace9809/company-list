/**
 * Created by Ace on 2018. 10. 6..
 */
import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 10px;
  height: 200px;
  display: flex;
  flex-wrap: wrap;
`;


const Input = styled.input`
  margin-left: 15px;
  font-size: 20px;
  font-weight: bold;
  width: 100%;
`;

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  onInputChange(value) {
    this.setState({ value });
    console.log(this.props);
    this.props.onSearchTerm(value);
  }

  render() {
    return (
      <Wrapper>
        <Input
          value={this.state.value}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </Wrapper>
    );
  }
}

export default SearchBar;


