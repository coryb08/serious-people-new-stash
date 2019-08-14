import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import * as actions from "../../store/actions";
import { aR } from "../../config";
import { jR } from "../../config";

class Template extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: this.props.heading,
      subText: this.props.subText
    };
  }

  render() {
    const dynamicStyles = {};

    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <TouchableOpacity
            onPress={this.props.onCancel}
            style={styles.closeIcon}>
            <Text style={[fonts.aR, { fontSize: 25 }]}>X</Text>
          </TouchableOpacity>
          <Text style={[fonts.aR, { fontSize: 35 }]}>{this.state.heading}</Text>
          <Text style={[fonts.jR, styles.subText]}>{this.state.subText}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={this.props.onConfirm}>
              <Text style={[fonts.aR, { fontSize: 30 }]}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.props.onCancel}>
              <Text style={[fonts.aR, { fontSize: 30 }]}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    display: "flex",
    top: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)"
  },
  body: {
    marginBottom: "46%",
    backgroundColor: "#eaece5",
    display: "flex",
    flexDirection: "column",
    height: "40%",
    width: "85%",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 6,
    borderColor: "#3b3a30",
    borderWidth: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 6,
      height: 6
    },
    shadowOpacity: 0.15,
    shadowRadius: 2.5,
    elevation: 5
  },
  closeIcon: {
    position: "absolute",
    top: "12%",
    left: "5%",
    height: 40,
    width: 40,
    borderColor: "#3b3a30",
    borderRadius: 50,
    borderWidth: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: "50%",
    justifyContent: "space-around"
  }
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
)(Template);
