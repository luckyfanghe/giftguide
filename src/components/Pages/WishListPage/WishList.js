import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link, withRouter } from "react-router-dom";

import * as S from "./styled";
import banner1 from "../../../assets/images/banner1.webp";
import * as routes from "../../../constants/routes";

class WishList extends React.Component {
  constructor(props) {
    super(props);
  }

  _onAddClickHandler = event => {
    event.preventDefault();
    this.props.history.push(routes.ADD_WISH_ITEM_PAGE);
  };

  render() {
    return (
      <React.Fragment>
        <S.Body data-testid="WishList">
          <S.Title>WishList</S.Title>
          <S.ShareButton type="button" border>
            Share Items
          </S.ShareButton>
          <S.WishListContainer>
            <S.WishItem>
              <S.AddWishItem border onClick={this._onAddClickHandler}>
                <S.Plus border>+</S.Plus>
              </S.AddWishItem>
              <S.WishItemLabel>add to wish list</S.WishItemLabel>
            </S.WishItem>
            <S.WishItem>
              <S.WishItemImage src={banner1} />
              <S.WishItemLabel>Wish Item Name</S.WishItemLabel>
              <S.WishItemLabel>$ 67</S.WishItemLabel>
            </S.WishItem>
            <S.WishItem>
              <S.WishItemImage src={banner1} />
              <S.WishItemLabel>Wish Item Name</S.WishItemLabel>
              <S.WishItemLabel>$ 67</S.WishItemLabel>
            </S.WishItem>
            <S.WishItem>
              <S.WishItemImage src={banner1} />
              <S.WishItemLabel>Wish Item Name</S.WishItemLabel>
              <S.WishItemLabel>$ 67</S.WishItemLabel>
            </S.WishItem>
            <S.WishItem>
              <S.WishItemImage src={banner1} />
              <S.WishItemLabel>Wish Item Name</S.WishItemLabel>
              <S.WishItemLabel>$ 67</S.WishItemLabel>
            </S.WishItem>
            <S.WishItem>
              <S.WishItemImage src={banner1} />
              <S.WishItemLabel>Wish Item Name</S.WishItemLabel>
              <S.WishItemLabel>$ 67</S.WishItemLabel>
            </S.WishItem>
            <S.WishItem>
              <S.WishItemImage src={banner1} />
              <S.WishItemLabel>Wish Item Name</S.WishItemLabel>
              <S.WishItemLabel>$ 67</S.WishItemLabel>
            </S.WishItem>
            <S.WishItem>
              <S.WishItemImage src={banner1} />
              <S.WishItemLabel>Wish Item Name</S.WishItemLabel>
              <S.WishItemLabel>$ 67</S.WishItemLabel>
            </S.WishItem>
          </S.WishListContainer>
          <S.ReceivedItemsLabel>RECEIVED ITEMS</S.ReceivedItemsLabel>
          <S.WishListContainer>
            <S.WishItem>
              <S.ReceivedItemImage src={banner1} />
              <S.WishItemLabel>Received Item Name Received </S.WishItemLabel>
              <S.WishItemLabel>$ 67</S.WishItemLabel>
            </S.WishItem>
            <S.WishItem>
              <S.ReceivedItemImage src={banner1} />
              <S.WishItemLabel>Received Item Name Received </S.WishItemLabel>
              <S.WishItemLabel>$ 67</S.WishItemLabel>
            </S.WishItem>
            <S.WishItem>
              <S.ReceivedItemImage src={banner1} />
              <S.WishItemLabel>Received Item Name Item Name</S.WishItemLabel>
              <S.WishItemLabel>$ 67</S.WishItemLabel>
            </S.WishItem>
            <S.WishItem>
              <S.ReceivedItemImage src={banner1} />
              <S.WishItemLabel>Received Item Name Item Name</S.WishItemLabel>
              <S.WishItemLabel>$ 67</S.WishItemLabel>
            </S.WishItem>
            <S.WishItem>
              <S.ReceivedItemImage src={banner1} />
              <S.WishItemLabel>Received Item Name Item Name</S.WishItemLabel>
              <S.WishItemLabel>$ 67</S.WishItemLabel>
            </S.WishItem>
            <S.WishItem>
              <S.ReceivedItemImage src={banner1} />
              <S.WishItemLabel>Received Item Name</S.WishItemLabel>
              <S.WishItemLabel>$ 67</S.WishItemLabel>
            </S.WishItem>
            <S.WishItem>
              <S.ReceivedItemImage src={banner1} />
              <S.WishItemLabel>Received Item Name Item Name</S.WishItemLabel>
              <S.WishItemLabel>$ 67</S.WishItemLabel>
            </S.WishItem>
            <S.WishItem>
              <S.ReceivedItemImage src={banner1} />
              <S.WishItemLabel>Received Item Name Item Name</S.WishItemLabel>
              <S.WishItemLabel>$ 67</S.WishItemLabel>
            </S.WishItem>
          </S.WishListContainer>
        </S.Body>
      </React.Fragment>
    );
  }
}

const actions = dispatch => bindActionCreators({}, dispatch);

function mapStateToProps(state) {
  return {
    user: state.userReducer.user,
    userState: state.userReducer.userState
  };
}

export default connect(mapStateToProps, actions)(withRouter(WishList));
