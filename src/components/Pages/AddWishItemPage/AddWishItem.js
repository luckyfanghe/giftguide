import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link, withRouter } from "react-router-dom";
import {
  Form,
  Button,
  FormControl,
  FormLabel,
  Dropdown,
  DropdownButton,
  DropdownType,
  Row,
  Col
} from "react-bootstrap";

import * as S from "./styled";
import Placeholder from "../../../assets/images/Placeholder.png";
import * as routes from "../../../constants/routes";
import "../../Styles/style.css";
import { listPricePoint } from "../../../constants/utils";

class AddWishItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validated: false,
      price_point: "...",
      stateMoreDetail: false,
      name: "",
      price_point: "",
      url: "",
      price: "",
      color_flaver_type: "",
      size: "",
      quantity: "",
      most_loved_item: false,
      description: ""
    };
  }

  _onChangeNameHandler = event => {
    this.setState({
      name: event.target.value
    });
  };

  _onChangePricePointHandler = event => {
    this.setState({
      price_point: event.target.value
    });
  };

  _onChangeUrlHandler = event => {
    this.setState({
      url: event.target.value
    });
  };

  _onChangePriceHandler = event => {
    var price = event.target.value;
    price = price.substring(2, price.length);
    for (let i = 0; i < listPricePoint.length; i++) {
      console.log(parseInt(price));
      if (
        parseInt(listPricePoint[i].value1) <= parseInt(price) &&
        parseInt(listPricePoint[i].value2) >= parseInt(price)
      ) {
        this.setState({ price_point: listPricePoint[i].text });
      } else if (isNaN(parseInt(price)))
        this.setState({ price_point: listPricePoint[0].text });
    }
    this.setState({
      price: price
    });
  };

  _onChangeColorAndTypeHandler = event => {
    this.setState({
      color_flaver_type: event.target.value
    });
  };

  _onChangeSizeHandler = event => {
    this.setState({
      size: event.target.value
    });
  };

  _onChangeQuantityHandler = event => {
    this.setState({
      quantity: event.target.value
    });
  };

  _onChangeMostLovedItemHandler = event => {
    this.setState({
      most_loved_item: event.target.value
    });
  };

  _onChangeDescriptionHandler = event => {
    this.setState({
      description: event.target.value
    });
  };

  _onAddMoreDetailHandler = event => {
    this.setState({ stateMoreDetail: true });
  };

  _onRemoveMoreDetailHandler = event => {
    this.setState({ stateMoreDetail: false });
  };

  _onSubmitHandle = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      this.setState({
        validated: true
      });
      return false;
    } else {
      this.setState({
        validated: false
      });

      var wishItem = {
        name: this.state.name,
        price_point: this.state.price_point,
        url: this.state.url,
        price: this.state.price,
        color_flaver_type: this.state.color_flaver_type,
        size: this.state.size,
        quantity: this.state.quantity,
        most_loved_item: this.state.most_loved_item,
        description: this.state.description
      };

      console.log(wishItem);
      return false;
    }
  };

  _onAddClickHandler = event => {
    event.preventDefault();
    this.props.history.push(routes.UPDATE_WISH_ITEM_PAGE);
  };

  render() {
    console.log(this.state.price_point);
    return (
      <React.Fragment>
        <S.Body data-testid="AddWishItem">
          <S.Title>ADD TO WISH LIST</S.Title>
          <S.SubTitle>fields marked with * are required</S.SubTitle>
          <S.MainContainer>
            <S.UpdatePhotoContainer>
              <S.SubTitle>upload photo</S.SubTitle>
              <S.WishItemImage src={Placeholder} border />
            </S.UpdatePhotoContainer>
            <S.FormContainer>
              <Form>
                <Form.Group>
                  <Form.Label>* name of item</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    onClick={this._onChangeEmailHandler}
                    onChange={this._onChangeNameHandler}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>price point</Form.Label>
                  <Form.Control
                    as="select"
                    onChange={this._onChangePricePointHandler}
                    value={this.state.price_point}
                  >
                    {listPricePoint.map((value, index) => {
                      return <option key={index}>{value["text"]}</option>;
                    })}
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>url/ web address</Form.Label>
                  <Form.Control
                    type="text"
                    onClick={this._onChangeUrlHandler}
                  />
                </Form.Group>
                <S.SubTitle>
                  add more detail
                  <S.MoreDetail
                    onClick={this._onAddMoreDetailHandler}
                    visible={true}
                  >
                    {"   "}+
                  </S.MoreDetail>
                  <S.MoreDetail
                    onClick={this._onRemoveMoreDetailHandler}
                    visible={this.state.stateMoreDetail}
                  >
                    {"   "}-
                  </S.MoreDetail>
                </S.SubTitle>
                <S.DetailContainer visible={this.state.stateMoreDetail}>
                  <S.FormDetail>
                    <Form.Row>
                      <Form.Group as={Col} md={3}>
                        <Form.Label>price</Form.Label>
                        <Form.Control
                          type="text"
                          onChange={this._onChangePriceHandler}
                          value={"$ " + this.state.price}
                        />
                      </Form.Group>
                      <Form.Group as={Col} md={5}>
                        <Form.Label>color/ flavor/ type</Form.Label>
                        <Form.Control
                          type="text"
                          onChange={this._onChangeColorAndTypeHandler}
                        />
                      </Form.Group>
                      <Form.Group as={Col} md={2}>
                        <Form.Label>size</Form.Label>
                        <Form.Control
                          type="text"
                          onChange={this._onChangeSizeHandler}
                        />
                      </Form.Group>
                      <Form.Group as={Col} md={2}>
                        <Form.Label>quantity</Form.Label>
                        <Form.Control
                          type="text"
                          onChange={this._onChangeQuantityHandler}
                        />
                      </Form.Group>
                    </Form.Row>
                  </S.FormDetail>
                </S.DetailContainer>
                <S.DetailContainerOther visible={this.state.stateMoreDetail}>
                  <Form.Group>
                    <Form.Check
                      label="most loved item"
                      onChange={this._onChangeMostLovedItemHandler}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="3"
                      className="form-textarea"
                      onChange={this._onChangeDescriptionHandler}
                    />
                  </Form.Group>
                </S.DetailContainerOther>
                <Button
                  variant="primary"
                  type="submit"
                  className="add-wish-item-btn"
                >
                  ADD TO WISH LIST
                </Button>
              </Form>
            </S.FormContainer>
          </S.MainContainer>
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

export default connect(mapStateToProps, actions)(AddWishItem);
