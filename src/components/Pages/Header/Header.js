import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { Navbar, Nav, FormControl } from "react-bootstrap";

import * as S from "./styled";
import logo from "../../../assets/images/Logo.webp";
import searchIcon from "../../../assets/images/search-icon.webp";
import avatarImg from "../../../assets/images/avatar.webp";
import * as routes from "../../../constants/routes";

import "../../Styles/style.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchInputVisible: false
    };
  }

  _toggleSearch = e => {
    e.preventDefault();
    this.setState({
      isSearchInputVisible: this.state.isSearchInputVisible ? false : true
    });
  };

  _handleKeyDown = e => {
    if (e.key === "Enter") {
      this.props.history.push(routes.SEARCH_PAGE);
    }
  };

  render() {
    return (
      <React.Fragment>
        <S.Body data-testid="Header">
          <S.Topbar>
            <S.Logo>
              <img src={logo} alt="logo" />
              <S.LogoText>THE GIFT GUIDE</S.LogoText>
            </S.Logo>
            <S.Avatar>
              <S.SearchInput
                visible={this.state.isSearchInputVisible ? "ture" : "false"}
              >
                <FormControl
                  type="text"
                  placeholder="Search"
                  onKeyDown={this._handleKeyDown}
                />
              </S.SearchInput>
              <img src={searchIcon} alt="search" onClick={this._toggleSearch} />
              <S.Plus>+</S.Plus>
              <S.AvatarImg src={avatarImg} alt="avatar" />
            </S.Avatar>
          </S.Topbar>
          <div className="nab-bar">
            <Navbar bg="light" expand="lg" className="nab-bar-bar">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className="nab-bar-link">
                <Nav className="mr-auto">
                  <Nav.Link to="/dashboard" className="nab-link" as={Link}>
                    DASHBOARD
                  </Nav.Link>
                  <Nav.Link to="/wish_list" className="nab-link" as={Link}>
                    WISH LIST
                  </Nav.Link>
                  <Nav.Link to="/friends" className="nab-link" as={Link}>
                    FRIENDS
                  </Nav.Link>
                  <Nav.Link to="/calendar" className="nab-link" as={Link}>
                    CALENDAR
                  </Nav.Link>
                  <Nav.Link to="/gift_guides" className="nab-link" as={Link}>
                    GIFT GUIDES
                  </Nav.Link>
                  <Nav.Link to="/blog" className="nab-link" as={Link}>
                    BLOG
                  </Nav.Link>
                  <Nav.Link to="/contact" className="nab-link" as={Link}>
                    CONTACT
                  </Nav.Link>
                  <Nav.Link to="/about" className="nab-link" as={Link}>
                    ABOUT
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
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

// export default Header;
export default connect(mapStateToProps, actions)(withRouter(Header));
