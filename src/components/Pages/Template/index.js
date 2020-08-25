import React, { setState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { slide as Menu } from "react-burger-menu";
import { withRouter } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";
import SlideBar from "../SlideBar";
import * as S from "./styled";
import "../../Styles/sidebar.css";
import { openSidebar, closeSidebar } from "../../../actions/authActions";

class Template extends React.Component {
  constructor(props) {
    super(props);
    if (
      this.props.user != null ||
      this.props.location.pathname != "/dashboard"
    ) {
      this.props.closeSidebar();
    }
  }

  componentDidMount() {}

  componentWillMount() {}

  render() {
    return (
      <div className="body" id="outer-container">
        <div>
          <Menu
            id="slide"
            width={"30%"}
            right={true}
            isOpen={this.props.sidebarOpened}
          >
            <SlideBar />
          </Menu>
        </div>

        <main id="page-wrap">
          <Header />
          <S.PageWrapper>{this.props.children}</S.PageWrapper>
          <Footer />
        </main>
      </div>
    );
  }
}

const actions = dispatch =>
  bindActionCreators(
    {
      openSidebar,
      closeSidebar
    },
    dispatch
  );

function mapStateToProps(state) {
  return {
    sidebarOpened: state.authReducer.sidebarOpened,
    user: state.userReducer.user,
    userState: state.userReducer.userState,
    userStateDes: state.userReducer.userStateDes
  };
}

export default connect(mapStateToProps, actions)(withRouter(Template));
