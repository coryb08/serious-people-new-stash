import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, StyleSheet, Animated, Easing } from "react-native";
import * as actions from "../store/actions";
import { aR } from "../config";
import { jR } from "../config";

class LoadingOverlay extends Component {
  constructor(props) {
    super(props);
    this.state = { rotate: new Animated.Value(0) };
  }

  componentDidMount() {
    Animated.loop(
      Animated.timing(this.state.rotate, {
        toValue: 1,
        duration: 2000,
        // useNativeDriver: true,
        easing: Easing.linear
      }),
      { iterations: -1 }
    ).start(); // Starts the animation
  }

  render() {
    const spin = this.state.rotate.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    });

    const dynamicStyles = {};

    return (
      <View style={styles.container}>
        <Text style={[fonts.aR, styles.headerText]}>Loading</Text>
        <Animated.View style={{ transform: [{ rotate: spin }] }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "#c0ded9"
  },
  headerText: { fontSize: 35 },
  icon: { paddingTop: "20%" }
});

const fonts = StyleSheet.create({
  aR,
  jR
});

const mapStateToProps = state => {
  return state;
};
export default connect(
  mapStateToProps,
  actions
)(LoadingOverlay);
