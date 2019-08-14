import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";
import * as actions from "../../store/actions";
import { aR } from "../../config";
import { jR } from "../../config";
import { crossHeightX } from "react-native-cross-platform-responsive-dimensions";

class MainNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const dynamicStyles = {};

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => Actions.pop()}>
          <Text style={[fonts.aR, styles.headerText]}>{" < "}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    height: crossHeightX(7, 7, 7, 7, 9),
    width: "100%",
    backgroundColor: "#c0ded9",
    borderBottomWidth: 0.3,
    paddingLeft: "2%",
    borderBottomColor: "darkgray"
  },
  headerText: { fontSize: 35 }
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
)(MainNavBar);
