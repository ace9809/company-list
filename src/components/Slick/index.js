/**
 * Created by Ace on 2018. 10. 7..
 */
import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import { TiArrowLeftOutline, TiArrowRightOutline } from "react-icons/ti";
//import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import areas from '../../area.json';

const Wrapper = styled.div`
/*
 width: 100%;
 arrow: true;
 height: 70px;
 border-bottom: 1px solid #F3F1F1;
 margin: 10px 0;
*/

  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 400px;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  background: none;
`;

const ButtonWrapper = styled.div`
/*
  height: 60px;
  cursor: pointer;
  border: 1px solid #949894;
  display: flex;
  align-items: center;
  justify-content: center;
*/
  width: 120px;
  margin: 0 8px 8px;
  height: 95px;
  padding-top: 17px;
  padding-left: 162px;
  background: white;
  border-bottom: 0;
  box-shadow: 1px 1px
`;

/*
const LeftArrow = styled(TiArrowLeftOutline)`
  cursor: pointer;
`;

const RightArrow = styled(TiArrowRightOutline)`
  cursor: pointer;
`;
*/

class Slick extends React.Component {
  onClickArea = (area) => {
    if (area.name === "전체") {
      this.props.onSearchTerm();
    }
    else this.props.onSearchTerm(area.name);
  }

  render() {
    return (
      <Wrapper>
          {
            areas.map((area, index) => {
              return (
                <ButtonWrapper
                  onClick={(e) => this.onClickArea(area)}
                  key={index}
                >
                  {area.name}
                </ButtonWrapper>
              )
            })
          }
      </Wrapper>
    );
  }
}

Slick.propTypes = {
  onSearchTerm: PropTypes.func
};

export default Slick;
