/**
 * Created by Ace on 2018. 10. 7..
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroller'
import Card from '../../components/Card';
import SearchBar from '../../components/SearchBar';
import Slick from '../../components/Slick';
import { getCompanyList, updateHeart, fetchCompanyList } from '../../actions';

const Wrapper = styled.div`
  width: 100%;
`;

const CardListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 4%;
`;

const NotListWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 4%;
  font-size: 40px;
  font-weight: black;
`;

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      area: '',
      name: '',
      offset: 0,
      hasMore: true
    };
  }

  nameSetState = (value) => {
    this.setState({ name: value })
    this.debounceSerachCompanies();
  };

  areaSetState = (value) => {
    this.setState({ area: value })
    this.debounceSerachCompanies();
  };

  serachCompanies = () => {
    this.setState({ hasMore: false })
    this.props.getCompanyList(this.state);
  };

  debounceSerachCompanies = _.debounce(value => {
    this.serachCompanies(value);
  }, 500);

  upHeartCount = (id) => {
    this.props.updateHeart(id, true);
  };

  downHeartCount = (id) => {
    this.props.updateHeart(id, false);
  }

  fetchMoreData = () => {
    if ((Number(this.props.count) - 20 < this.state.offset)) {
      this.setState({ hasMore: false })
    } else {
      setTimeout(() => {
        this.setState({ hasMore: true })
        this.setState({ offset: this.state.offset + 20  });
        this.props.fetchCompanyList(this.state, this.state.offset);
      }, 500);
    }
  };

  render() {
    return (
      <Wrapper>
        <Slick onSearchTerm={this.areaSetState} />
        <SearchBar type="text" onSearchTerm={this.nameSetState} />
        { this.props.companies.length === 0 ? (
          <NotListWrapper>데이터가 없습니다</NotListWrapper>
        ) : (

          <InfiniteScroll
            pageStart={0}
            loadMore={this.fetchMoreData}
            hasMore={this.state.hasMore}
          >
          <CardListWrapper>

            {
              this.props.companies.map((company, index) => {
                return (
                  <Card
                    key={index}
                    company={company}
                    upHeartCount={this.upHeartCount}
                    downHeartCount={this.downHeartCount}
                  />
                )
              })
            }
          </CardListWrapper>
            </InfiniteScroll>
        )}

      </Wrapper>
    );
  }
}

export default connect(null, { getCompanyList, updateHeart, fetchCompanyList })(CardList);
