import React, { Component, lazy, Suspense } from "react";
import { Route, Redirect, Switch, BrowserRouter } from "react-router-dom";
import { connect, Provider } from "react-redux";
import { bindActionCreators } from "redux";
import Loadable from "react-loadable";

// import { history } from "./../../stores";
import * as routes from "../../constants/routes";
import "./App.css";
import "../Styles/font.css";

import PageFactory from "../Pages/PageFactory";

import DashboardPage from "../Pages/DashboardPage";
import AboutPage from "../Pages/AboutPage";
import AccountPage from "../Pages/AccountPage";
import AccountSettingPage from "../Pages/AccountSettingPage";
import UpdateWishItemPage from "../Pages/UpdateWishItemPage";
import AddWishItemPage from "../Pages/AddWishItemPage";
import BlogPage from "../Pages/BlogPage";
import CalendarPage from "../Pages/CalendarPage";
import FeedbackPage from "../Pages/FeedbackPage";
import FriendsPage from "../Pages/FriendsPage";
import GiftGuidesPage from "../Pages/GiftGuidesPage";
import PrivacyPolicyPage from "../Pages/PrivacyPolicyPage";
import ProfilePage from "../Pages/ProfilePage";
import SearchPage from "../Pages/SearchPage";
import WishListPage from "../Pages/WishListPage";
import ContactPage from "../Pages/ContactPage";
import delay from "delay";
const loading = () => <div>Loading</div>;

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  render() {
    const DashboardPageAugmented = () => (
      <PageFactory>
        <DashboardPage />
      </PageFactory>
    );
    const AboutPageAugmented = () => (
      <PageFactory>
        <AboutPage />
      </PageFactory>
    );
    const AccountPageAugmented = () => (
      <PageFactory>
        <AccountPage />
      </PageFactory>
    );
    const AccountSettingPageAugmented = () => (
      <PageFactory>
        <AccountSettingPage />
      </PageFactory>
    );
    const UpdateWishItemPageAugmented = () => (
      <PageFactory>
        <UpdateWishItemPage />
      </PageFactory>
    );
    const BlogPageAugmented = () => (
      <PageFactory>
        <BlogPage />
      </PageFactory>
    );
    const CalendarPageAugmented = () => (
      <PageFactory>
        <CalendarPage />
      </PageFactory>
    );
    const FeedbackPageAugmented = () => (
      <PageFactory>
        <FeedbackPage />
      </PageFactory>
    );
    const FriendsPageAugmented = () => (
      <PageFactory>
        <FriendsPage />
      </PageFactory>
    );
    const WishListPageAugmented = () => (
      <PageFactory>
        <WishListPage />
      </PageFactory>
    );
    const SearchPageAugmented = () => (
      <PageFactory>
        <SearchPage />
      </PageFactory>
    );
    const ProfilePageAugmented = () => (
      <PageFactory>
        <ProfilePage />
      </PageFactory>
    );
    const GiftGuidesPageAugmented = () => (
      <PageFactory>
        <GiftGuidesPage />
      </PageFactory>
    );
    const PrivacyPolicyPageAugmented = () => (
      <PageFactory>
        <PrivacyPolicyPage />
      </PageFactory>
    );
    const ContactPageAugmented = () => (
      <PageFactory>
        <ContactPage />
      </PageFactory>
    );
    const AddWishItemPageAugmented = () => (
      <PageFactory>
        <AddWishItemPage />
      </PageFactory>
    );
    // prettier-ignore
    return (
        <BrowserRouter>
          <React.Fragment>
            <div className="app"  data-testid="App">
              <Switch>
                <Redirect exact from="/" to={routes.DASHBOARD_PAGE} />
                <Route exact path={routes.DASHBOARD_PAGE} component={DashboardPageAugmented} />
              </Switch>
              <Route exact path={ routes.SEARCH_PAGE } component={ SearchPageAugmented } />
              <Route exact path={ routes.WISH_LIST_PAGE } component={ WishListPageAugmented } />
              <Route exact path={routes.ABOUT_PAGE} component={AboutPageAugmented} />
              <Route exact path={routes.ACCOUNT_PAGE} component={AccountPageAugmented} />
              <Route exact path={routes.ACCOUNT_SETTING_PAGE}	component={AccountSettingPageAugmented} />
              <Route exact path={routes.UPDATE_WISH_ITEM_PAGE}	component={UpdateWishItemPageAugmented} />
              <Route exact path={routes.BLOG_PAGE}	component={BlogPageAugmented} />
              <Route exact path={routes.CALENDAR_PAGE} component={CalendarPageAugmented} />
              <Route exact path={routes.FEEDBACK_PAGE}	component={FeedbackPageAugmented} />
              <Route exact path={routes.FRIENDS_PAGE} component={ FriendsPageAugmented } />
              <Route exact path={routes.PROFILE_PAGE}	component={ProfilePageAugmented} />
              <Route exact path={routes.GIFTGUIDES_PAGE}	component={GiftGuidesPageAugmented} />
              <Route exact path={routes.PRIVACY_POLICY_PAGE}	component={PrivacyPolicyPageAugmented} />
              <Route exact path={routes.CONTACT_PAGE}	component={ContactPageAugmented} />
              <Route exact path={routes.ADD_WISH_ITEM_PAGE}	component={AddWishItemPageAugmented} />
            </div>
          </React.Fragment>
        </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    userState: state.userReducer.userState
  };
};

// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ userRequest }, dispatch);
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);
