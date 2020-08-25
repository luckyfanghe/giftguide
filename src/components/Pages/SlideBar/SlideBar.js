import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { Icon } from "@fickleinfo/react-icons";
import { Form, Button, FormControl } from "react-bootstrap";

import * as S from "./styled";
import logo from "../../../assets/images/Logo-large.webp";
import "../../Styles/style.css";
import {
  openSidebar,
  closeSidebar,
  doingAuth
} from "../../../actions/authActions";
import { loginUser, signupUser } from "../../../actions/userActions";
import Spinner from "../../UI/Spinner";
import * as routes from "../../../constants/routes";

class SlideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validated: false,
      errorState: this.props.userStateDes != "" ? true : false
    };
    this.emailTextInput = React.createRef();
    this.passwordTextInput = React.createRef();
  }

  componentDidMount() {}

  _onChangeEmailHandler = e => {
    this.setState({ errorState: false });
  };

  _onChangePasswordHandler = e => {
    this.setState({ errorState: false });
  };

  _handleSubmit = event => {
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
      this.props.doingAuth("authenticating");
      if (this.props.sidebarStyle == "login")
        this.props.loginUser({
          email: this.emailTextInput.current.value,
          password: this.passwordTextInput.current.value
        });
      else if (this.props.sidebarStyle == "signup")
        this.props.signupUser({
          email: this.emailTextInput.current.value,
          password: this.passwordTextInput.current.value
        });
    }
  };

  _onSignupHandler = e => {
    e.preventDefault();
    this.props.closeSidebar();
    setTimeout(
      function() {
        this.props.openSidebar("signup");
        this.props.history.push(routes.DASHBOARD_PAGE);
      }.bind(this),
      1000
    );
  };

  _onLoginHandler = e => {
    e.preventDefault();
    this.props.closeSidebar();
    setTimeout(
      function() {
        this.props.openSidebar("login");
        this.props.history.push(routes.DASHBOARD_PAGE);
      }.bind(this),
      1000
    );
  };

  loginComponent = () => {
    return (
      <React.Fragment>
        <S.Link> {process.env.NODE_ENV}</S.Link>
        <S.Link onClick={this._onSignupHandler}>create an account</S.Link>
        <S.Link>login with google or facebook</S.Link>
      </React.Fragment>
    );
  };

  signupComponent = () => {
    return (
      <React.Fragment>
        <S.Link onClick={this._onLoginHandler}>
          already have an accont? log in
        </S.Link>
        <S.Link>signup with google or facebook</S.Link>
      </React.Fragment>
    );
  };

  render() {
    let linkComponent;
    if (this.props.sidebarStyle == "login")
      linkComponent = this.loginComponent();
    else if (this.props.sidebarStyle == "signup")
      linkComponent = this.signupComponent();
    return (
      <React.Fragment>
        <S.Body data-testid="SlideBar">
          <S.Logo src={logo} alt="logo" />
          <S.Title>WELCOME TO GIFT GIUDE</S.Title>
          <Form
            noValidate
            validated={this.state.validated}
            onSubmit={this._handleSubmit}
          >
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                ref={this.emailTextInput}
                type="email"
                required
                onClick={this._onChangeEmailHandler}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                ref={this.passwordTextInput}
                type="password"
                required
                onClick={this._onChangePasswordHandler}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="auth-button">
              {this.props.sidebarStyle == "login" ? "LOG IN" : "SIGN UP"}
            </Button>
          </Form>
          <S.Error>
            {this.state.errorState ? this.props.userStateDes : ""}
          </S.Error>
          {linkComponent}
          <S.Spinner>
            {this.props.authState == "authenticating" ? (
              <Spinner width={50} height={50} />
            ) : (
              ""
            )}
          </S.Spinner>
        </S.Body>
      </React.Fragment>
    );
  }
}

const actions = dispatch =>
  bindActionCreators(
    {
      openSidebar,
      closeSidebar,
      loginUser,
      signupUser,
      doingAuth
    },
    dispatch
  );

function mapStateToProps(state) {
  return {
    sidebarOpened: state.authReducer.sidebarOpened,
    sidebarStyle: state.authReducer.sidebarStyle,
    authState: state.authReducer.authState,
    userState: state.userReducer.userState,
    userStateDes: state.userReducer.userStateDes
  };
}

export default connect(mapStateToProps, actions)(withRouter(SlideBar));
