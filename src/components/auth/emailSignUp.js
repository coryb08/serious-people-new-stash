import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
class EmailSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailText: "",
      passwordText: "",
      passwordConfirmText: ""
    };
  }
  render() {
    return (
      <View style={this.props.containerStyle}>
        <Text style={styles.header}>Email sign up</Text>
        <View style={styles.formContainer}>
          <TextInput
            placeholder="email"
            selectionColor="#dddcd5"
            style={styles.input}
            onChangeText={emailText => this.setState({ emailText })}
            value={this.state.emailText}
            returnKeyType="next"
            blurOnSubmit={false}
            onSubmitEditing={() => {
              this.secondTextInput.focus();
            }}
          />
          <TextInput
            placeholder="password"
            selectionColor="#dddcd5"
            style={styles.input}
            secureTextEntry={true}
            blurOnSubmit={false}
            ref={input => {
              this.secondTextInput = input;
            }}
            onChangeText={passwordText => this.setState({ passwordText })}
            value={this.state.passwordText}
            onSubmitEditing={() => {
              this.thirdTextInput.focus();
            }}
            returnKeyType="next"
          />
          <TextInput
            placeholder="confirm password"
            selectionColor="#dddcd5"
            style={styles.input}
            secureTextEntry={true}
            onChangeText={passwordConfirmText =>
              this.setState({ passwordConfirmText })
            }
            value={this.state.passwordConfirmText}
            ref={input => {
              this.thirdTextInput = input;
            }}
            onSubmitEditing={() => this.props.EmailSignUpRunner(this.state)}
            returnKeyType="go"
          />
        </View>
        <TouchableOpacity
          key={Math.random()}
          onPress={() => this.props.EmailSignUpRunner(this.state)}
          style={styles.nextContainer}
        >
          <Text style={styles.signupText}>NEXT</Text>
          <Text style={styles.signupText2}> ></Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  state
});

export default connect(
  mapStateToProps,
  actions
)(EmailSignUp);

const styles = StyleSheet.create({
  header: {
    marginTop: "-30%",
    fontSize: 50,
    fontFamily: "AmaticSC-Regular",
    color: "#3b3a30"
  },
  formContainer: {
    backgroundColor: "#eaece5",
    height: "40%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    justifyContent: "flex-start",
    width: "80%",
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 6,
      height: 6
    },
    shadowOpacity: 0.15,
    shadowRadius: 2.5,
    elevation: 5
  },
  input: {
    paddingLeft: 10,
    letterSpacing: 1,
    marginTop: 20,
    height: "20%",
    width: "90%",
    borderBottomColor: "#d1d0c7",
    borderBottomWidth: 1,
    borderRadius: 6,
    fontSize: 30,
    fontFamily: "AmaticSC-Regular",
    color: "#3b3a30"
  },
  signupText: {
    fontFamily: "AmaticSC-Bold",
    color: "#3b3a30",
    fontSize: 50,
    letterSpacing: 1,
    textDecorationLine: "underline"
  },
  signupText2: {
    fontFamily: "AmaticSC-Bold",
    color: "#3b3a30",
    fontSize: 50,
    letterSpacing: 1
  },
  nextContainer: {
    display: "flex",
    flexDirection: "row",
    bottom: "10%",
    paddingLeft: 30,
    position: "absolute"
  }
});
