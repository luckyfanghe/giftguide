import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link, withRouter } from "react-router-dom";

import * as S from "./styled";
import banner1 from "../../../assets/images/banner1.webp";
import * as routes from "../../../constants/routes";

class UpdateWishItem extends React.Component {
  constructor(props) {
    super(props);
  }

  _onAddClickHandler = event => {
    event.preventDefault();
    this.props.history.push(routes.UPDATE_WISH_ITEM_PAGE);
  };

  render() {
    return (
      <React.Fragment>
        <S.Body data-testid="UpdateWishItem">
          <S.Title>UPDATE ITEM</S.Title>
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

export default connect(mapStateToProps, actions)(UpdateWishItem);
