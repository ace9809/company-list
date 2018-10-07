/**
 * Created by Ace on 2018. 10. 7..
 */
import React from "react";
import styled from 'styled-components';
import { TiArrowLeftOutline, TiArrowRightOutline } from "react-icons/ti";
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import areas from '../../area.json';

const Wrapper = styled.div`
 width: 100%;
 arrow: true;
 height: 70px;
 border-bottom: 1px solid #F3F1F1;
 margin: 10px 0;
`;

const ButtonWrapper = styled.div`
  width: 120px;
  height: 60px;
  cursor: pointer;
  border: 1px solid #949894;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftArrow = styled(TiArrowLeftOutline)`
  cursor: pointer;
`;

const RightArrow = styled(TiArrowRightOutline)`
  cursor: pointer;
`;


class Slick extends React.Component {
  onClickArea = (area) => {
    this.props.onSearchTerm(area.name);
  }

  render() {
    return (
      <Wrapper>
        <Carousel
          slidesPerScroll={6}
          slidesPerPage={8}
          arrowLeft={<LeftArrow />}
          arrowRight={<RightArrow />}
          addArrowClickHandler
          arrows
        >
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
        </Carousel>
      </Wrapper>
    );
  }
}

export default Slick;