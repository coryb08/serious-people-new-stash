import firebase from "../../api/firebase";
import config from "../../config.js";
import * as actions from "./index";
require("firebase/firestore");

export const retrieveRealtime = id => {
  return async (dispatch, getState) => {
    let user = await getState().auth;
    try {
      await firebase
        .firestore()
        .collection(`userProfiles`)
        .doc("OtdG45W1NobpZV3MQiWKqWVzsGM2")
        .get()
        .catch(err => console.log("retrieveRealtime error", err))
        .then(res => {
          let value = res.data();
          dispatch(actions.appLoading(false));
          return dispatch({
            type: "SET_REALTIME_RESPONSE",
            payload: value
          });
        });
    } catch (err) {
      console.log("setUserProfile", err);
    }
  };
};
