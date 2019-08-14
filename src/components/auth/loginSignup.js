import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Actions, ActionConst } from "react-native-router-flux";
import * as actions from "../../store/actions";

import { aR } from "../../config";
import { jR } from "../../config";

class LoginSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const dynamicStyles = {};

    return (
      <View style={this.props.containerStyle}>
        <Text style={[styles.header, fonts.aR]}>Have an account?</Text>
        <View style={styles.signInContainer}>
          <TextInput
            selectionColor="#dddcd5"
            placeholder="username"
            style={styles.usernamePassword}
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
          <TextInput
            selectionColor="#dddcd5"
            placeholder="password"
            secureTextEntry={true}
            style={styles.usernamePassword}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
          <TouchableOpacity
            onPress={
              () =>
                Actions.confirmDialog({
                  heading: "Are you sure",
                  subText: "This is a confirm dialog",
                  onConfirm: () => {
                    console.log("confirmed");
                    Actions.pop();
                  },
                  onCancel: () => {
                    console.log("cancelled");
                    Actions.pop();
                  }
                })
              // this.props.signInRunner({
              //   email: this.state.email,
              //   password: this.state.password
              // })
            }
            style={styles.signinButton}>
            <Text style={styles.signinText}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signUpContainer}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center"
            }}
            onPress={this.props.facebookLogin}>
            <Text style={[styles.signupText]}>continue with facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 30
            }}
            onPress={() => Actions.EmailSignUp()}>
            <Text style={[styles.signupText, { marginLeft: 10 }]}>
              sign up with email
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  signInContainer: {
    backgroundColor: "#eaece5",
    display: "flex",
    flexDirection: "column",
    height: "30%",
    width: "80%",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 6,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 6,
      height: 6
    },
    shadowOpacity: 0.15,
    shadowRadius: 2.5,
    elevation: 5
  },
  boldText: {
    fontFamily: "JosefinSans-Regular",
    color: "#3b3a30",
    letterSpacing: 1
  },
  header: {
    marginTop: 100,
    fontSize: 50
  },

  usernamePassword: {
    width: "80%",
    fontSize: 30,
    backgroundColor: "#eaece5",
    fontFamily: "AmaticSC-Regular"
  },
  signinText: {
    fontFamily: "AmaticSC-Bold",
    color: "#3b3a30",
    fontSize: 30,
    letterSpacing: 1
  },
  signinButton: {
    borderRadius: 6,
    borderBottomColor: "#c6c5b9",
    borderBottomWidth: 1,
    height: "21%"
  },
  signUpContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "20%",
    width: "80%",
    flexDirection: "column",
    borderRadius: 3,
    alignSelf: "center",
    marginTop: 100
  },
  fbsignup: {
    borderRadius: 3,
    display: "flex",
    width: "71%",
    justifyContent: "center",
    alignItems: "center"
  },
  signupImg: {
    height: 35,
    width: 35
  },
  signupText: {
    fontFamily: "AmaticSC-Regular",
    color: "#3b3a30",
    fontSize: 30,

    letterSpacing: 1
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
)(LoginSignup);
