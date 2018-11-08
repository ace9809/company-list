/**
 * Created by Ace on 2018. 10. 7..
 */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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
  overflow: hidden;
  display: -webkit-box;
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

const LinkGreen = styled.a`
  color: #0b0;
  text-decoration: none;
`;

const LinkBlack = styled.a`
  color: #000;
  text-decoration: none;
`;

const SpanRed = styled.span`
  color: #b00;
  text-decoration: none;
`;

const SpanBlue = styled.span`
  color: #00b;
  text-decoration: none;
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
    var {
      category,
      location,
      annual_income,
      sales_lowest,
      sales_maximum,
      name,
      heart,
      sites,
      id
    } = this.props.company;

    const IconStyle = {
      cursor: 'pointer',
      color: 'red'
    };

	let site = '';
	if (sites) {
      site = <LinkGreen href={sites} target='_blank'>#사이트</LinkGreen>;
    } 

    let txt_annual_income = '';
	if (annual_income != 0) {
        annual_income = Math.round(annual_income / 10000);
      txt_annual_income = <SpanRed>{annual_income}만</SpanRed>
    } 

    let txt_sales_minimum = '';
    if (sales_lowest != 0) {
        sales_lowest = Math.round(sales_lowest / 100000000);
        sales_maximum = Math.round(sales_maximum / 100000000);
        if (sales_lowest != sales_maximum){
            txt_sales_minimum = <SpanBlue>{sales_lowest}억 ~ {sales_maximum}억</SpanBlue>
        } else {
            txt_sales_minimum = <SpanBlue>{sales_maximum}억</SpanBlue>
        }
    }

    let link_location = 'https://www.google.com/maps/search/' + location;

    return (
      <Wrapper>
        <CardInfoWrapper>
          <TitleWrapper>
            {name}
          </TitleWrapper>
          <LocationWrapper>
            <LinkBlack href={link_location} target='_blank'>{location}</LinkBlack>
          </LocationWrapper>
          <CategoryWrapper>
          {site} {txt_annual_income} {txt_sales_minimum}
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

Card.propTypes = {
  company: PropTypes.object,
  downHeartCount: PropTypes.func,
  upHeartCount: PropTypes.func
};

export default Card;

