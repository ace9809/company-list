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

const Container = styled.div`
  // size
  width: 64%;
  margin-top: 30px;
  font-size: 20px;
  height: 44px;
  font-weight: bold;
  // shadow
  background-color: #fff;
  border: none;
  border-radius: 2px;
  vertical-align: top;
  transition: box-shadow 200ms cubic-bezier(0.4, 0.0, 0.2, 1);
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
  // position
  display: block;
  position: fixed;
  top: 0;
  z-index: 101;
  box-sizing: border-box;

`;

const Input = styled.input`
  border: none;
  padding: 0px;
  margin: 0px;
  height: 100%;
  width: 90%;
  position: absolute;
  z-index: 6;
  left: 0px;
  outline: none;
  :focus {
      outline: none;
  }
  padding-left: 20px;
  font-size: 16px;
`;

const IconContainer = styled.div`
	font-size: 16px;
    padding: 0 2px;
    white-space: nowrap;
	display: block;
	height: 100%;
	width: 10%;
    min-width: 100px;
    z-index: 6;
	float: right;
	display: block;
    line-height: 44px;
	position: static;
`;

const IconA = styled.a`
	text-align: center;
	display: inline-block;
    float:right;
    width: 50%;
	height: 100%;
`;

const Image = styled.img`
    display: inline-block;
    vertical-align: middle;
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
		<Container>
			<Input
			  value={this.state.value}
			  onChange={event => this.onInputChange(event.target.value)}
			  placeholder="우아한형제들"
			/>
			<IconContainer>
			<IconA href="javascript:void(0)">
            <Image src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDYxMiA2MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYxMiA2MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8Zz4KCQk8Y2lyY2xlIGN4PSI2OS41NDUiIGN5PSIzMDYiIHI9IjY5LjU0NSIgZmlsbD0iIzAwMDAwMCIvPgoJCTxjaXJjbGUgY3g9IjMwNiIgY3k9IjMwNiIgcj0iNjkuNTQ1IiBmaWxsPSIjMDAwMDAwIi8+CgkJPGNpcmNsZSBjeD0iNTQyLjQ1NSIgY3k9IjMwNiIgcj0iNjkuNTQ1IiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="></Image>
			</IconA>
			</IconContainer>
		</Container>
      </Wrapper>
    );
  }
}

SearchBar.propTypes = {
  onSearchTerm: PropTypes.func
};

export default SearchBar;


