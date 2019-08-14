import firebase from "../../api/firebase";
import config from "../../config.js";
import * as actions from "./index";
import {
  LoginManager,
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager
} from "react-native-fbsdk";
require("firebase/firestore");

export const currentUser = () => {
  return async (dispatch, getState) => {
    try {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          dispatch({
            type: "SET_AUTH",
            payload: user
          });

          console.log("user is logged in");
          return dispatch(actions.retrieveRealtime(user.uid));
        } else {
          dispatch({
            type: "APP_LOADING",
            payload: false
          });
          console.log("user is not logged in");
          return dispatch(actions.appLoading(false));
        }
      });
    } catch (err) {
      console.log("current user", err);
    }
  };
};

export const facebookLogin = () => {
  return async (dispatch, getState) => {
    LoginManager.logInWithReadPermissions(["public_profile", "email"]).then(
      function(result) {
        if (result.isCancelled) {
          console.log("Login was cancelled");
        } else {
          AccessToken.getCurrentAccessToken().then(data => {
            dispatch(sendFacebookDataToFirebaseAuth(data.accessToken));
          });
        }
      },
      function(error) {
        alert("Login failed with error: " + error);
      }
    );
  };
};
