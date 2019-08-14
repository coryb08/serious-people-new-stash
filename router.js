import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Actions,
  Router,
  Scene,
  Reducer,
  ActionConst,
  Tabs,
  Stack,
  Modal,
  Lightbox
} from "react-native-router-flux";
import { StyleSheet } from "react-native";
import * as actions from "./src/store/actions";
import LoadingOverlay from "./src/components/loadingOverlay";
import LoginSignup from "./src/components/auth/loginSignup";
import EmailSignUp from "./src/components/auth/emailSignUp";
import ProfileSetup from "./src/components/profile/profileSetup";
import ConfirmDialog from "./src/components/dialogs/confirmDialog";
import MainNavBar from "./src/components/navigation/mainNavBar";
import MainTabBar from "./src/components/navigation/mainTabBar";

const reset = { type: "reset" };

class AppRouter extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
    this.state = { loading: this.props.events.loading };
  }

  componentDidMount = () => {
    this.props.currentUser();
  };

  render() {
    if (this.props.events.appLoading) {
      return <LoadingOverlay update={() => this.update(bool)} />;
    } else {
      return (
        <Router>
          <Modal hideNavBar>
            <Lightbox key="root">
              <Scene
                hideNavBar={true}
                key="confirmDialog"
                component={ConfirmDialog}
              />
              <Stack
                key="LoginSignupStack"
                navigationBarStyle={containers.mainNavBar}
                navBar={MainNavBar}
                initial={this.props.auth.status === 0 ? true : false}>
                <Scene
                  key="LoginSignup"
                  component={LoginSignup}
                  containerStyle={containers.full}
                  hideNavBar={true}
                  initial={true}
                />
                <Scene
                  key="EmailSignUp"
                  component={EmailSignUp}
                  containerStyle={containers.full}
                  previous={() =>
                    Actions.LoginSignup({ type: ActionConst.BACK_ACTION })
                  }
                />
              </Stack>
              <Tabs key="tabView" tabBarComponent={MainTabBar}>
                <Stack
                  key="seconds stack"
                  navigationBarStyle={containers.mainNavBar}>
                  <Scene
                    key="ProfileSetup"
                    component={ProfileSetup}
                    initial={this.props.auth.status > 0 ? true : false}
                  />
                </Stack>
              </Tabs>
            </Lightbox>
          </Modal>
        </Router>
      );
    }
  }
}

const containers = StyleSheet.create({
  full: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    backgroundColor: "#c0ded9"
  },
  mainNavBar: {
    backgroundColor: "#c0ded9"
  }
});

const mapStateToProps = state => {
  return {
    isConnectedStore: state.events.isConnected,
    ...state
  };
};

const ConnectedRouter = connect(
  mapStateToProps,
  actions
)(AppRouter);

export default {
  ConnectedRouter
};
