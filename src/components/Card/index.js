/**
 * Created by Ace on 2018. 10. 7..
 */
import React, { Component } from 'react';
import styled from 'styled-components';
import { IconCheckbox } from "react-icon-checkbox";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";

const Wrapper = styled.div`
  margin: 10px;
  width: 250px;
  height: 200px;
  border: 1px solid #DCE0DC;
  display: flex;
  flex-wrap: wrap;
`;

const CardInfoWrapper = styled.div`
  width: 100%;
  padding: 20px 20px 0 20px;
  border-bottom: 1px solid #DCE0DC;
`;

const TitleWrapper = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

const LocationWrapper = styled.div`
  margin-top: 10px;
  height: 60px;
`;

const CategoryWrapper = styled.div`
  margin-top: 10px;
  color: #999;
`;

const HeartWrapper = styled.div`
  color: #999;
  display: flex;
  align-items: center;
`;

const HeartCountWrapper = styled.div`
  margin-left: 3px;
  margin-bottom: 5px;
`;

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }

  onCheckboxClicked = (id) => {
    this.setState({checked: !this.state.checked});
    if (this.state.checked) this.props.downHeartCount(id);
    else this.props.upHeartCount(id);
  }

  render() {
    const {
      category,
      location,
      name,
      heart,
      id
    } = this.props.company;

    const IconStyle = {
      cursor: 'pointer',
      color: 'red'
    };

    return (
      <Wrapper>
        <CardInfoWrapper>
          <TitleWrapper>
            {name}
          </TitleWrapper>
          <LocationWrapper>
            {location}
          </LocationWrapper>
          <CategoryWrapper>
            #{category}
          </CategoryWrapper>
        </CardInfoWrapper>
        <HeartWrapper>
          <IconCheckbox
            checked={this.state.checked}
            uncheckedIcon={<IoIosHeartEmpty />}
            checkedIcon={<IoIosHeart />}
            onClick={(e) => this.onCheckboxClicked(id)}
            iconContainerStyle={IconStyle}

          />
          <HeartCountWrapper>
            {heart}
          </HeartCountWrapper>
        </HeartWrapper>
      </Wrapper>
    )
  }
};

export default Card;

