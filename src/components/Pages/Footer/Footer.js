import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { FormControl, Form, Button, Row, Col } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import * as socialLink from "./social_link";

import * as S from "./styled";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  _onClickSocialHandler = type => {
    window.open(type);
  };

  render() {
    return (
      <footer>
        <React.Fragment>
          <S.Body data-testid="Footer">
            <S.Socail>
              <S.Title>CONNECT WITH GIFT GUIDE</S.Title>
              <S.SocialIcon>
                <S.Icon>
                  <img src={socialLink.PINTEREST_ICON} />
                </S.Icon>
                <S.Icon>
                  <img src={socialLink.INSTAGRAM_ICON} />
                </S.Icon>
                <S.Icon>
                  <img src={socialLink.FACEBOOK_ICON} />
                </S.Icon>
                <S.Icon>
                  <img src={socialLink.TWITTER_ICON} />
                </S.Icon>
              </S.SocialIcon>
              <S.SiteLink>
                <S.Link>CONTACT US</S.Link>
                <S.Link>TEAMS OF USE / PRIVACY</S.Link>
                <S.Link>FEEDBACK</S.Link>
              </S.SiteLink>
            </S.Socail>
            <S.InviteContainer>
              <S.Title>INVITE FRIENDS TO GIFT GUIDE</S.Title>
              <S.SubTitle>enter your loved one's email to invite</S.SubTitle>
              <S.Form>
                <S.Input>
                  <FormControl type="text" onKeyDown={this._handleKeyDown} />
                </S.Input>
                <S.Button>INVITE</S.Button>
              </S.Form>
              <S.Copyright>2019 TM GIFT GUIDE LLC</S.Copyright>
            </S.InviteContainer>
          </S.Body>
        </React.Fragment>
      </footer>
    );
  }
}

const actions = dispatch => bindActionCreators({}, dispatch);

function mapStateToProps(state) {
  // return {
  //   user: state.userReducer.user.user,
  //   banner: state.bannerReducer.banner,
  // };
}

export default Footer;
// export default connect(null, actions)(Footer);
