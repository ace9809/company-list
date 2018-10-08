/**
 * Created by Ace on 2018. 10. 6..
 */
import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Input = styled.input`
  width: 84%;
  margin-top: 20px;
  padding-left: 20px;
  font-size: 20px;
  font-weight: bold;
  height: 40px;
`;

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  onInputChange(value) {
    this.setState({ value });
    this.debounceOnSearchTerm();
  }

  debounceOnSearchTerm = _.debounce(() => {
    this.props.onSearchTerm(this.state.value);
  }, 500);

  render() {
    return (
      <Wrapper>
        <Input
          value={this.state.value}
          onChange={event => this.onInputChange(event.target.value)}
          placeholder="Company name.."
        />
      </Wrapper>
    );
  }
}

SearchBar.propTypes = {
  onSearchTerm: PropTypes.func
};

export default SearchBar;


