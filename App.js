import React, { Fragment } from "react";
import { Provider } from "react-redux";
import Router from "./router.js";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native";
import { store } from "./src/store/store.js";
const { ConnectedRouter, Scenes } = Router;

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar hidden />
      <ConnectedRouter scenes={Scenes} />
    </Provider>
  );
};

export default App;
