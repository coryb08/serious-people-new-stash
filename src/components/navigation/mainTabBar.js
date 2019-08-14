import React from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image
} from "react-native";
import * as actions from "../../store/actions";
import { connect } from "react-redux";
import { crossHeightX } from "react-native-cross-platform-responsive-dimensions";
import { Actions, ActionConst } from "react-native-router-flux";

const transparent = "transparent";
class MainTabBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const styles = StyleSheet.create({
      leftRightIcon: {
        height: 30,
        width: 30
      },
      feedIcon: {
        height: 40,
        width: 40
      },
      container: {
        backgroundColor: "lightgray",
        borderTopColor: "darkgray",
        borderTopWidth: 1,
        height: crossHeightX(7, 7, 7, 7, 9),
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: "4%",
        paddingRight: "4%",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 0
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11
      }
    });
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            if (Actions.currentScene === "MessageFeed") {
              return;
            } else {
              this.props.resetMessaging();
              this.props.retrieveConversations(this.props.user.login.uid);
              Actions.MessageFeed({ type: ActionConst.REPLACE });
            }
          }}
        />
        <TouchableOpacity
          onPress={() => {
            if (Actions.currentScene === "UserFeed") {
              return;
            } else {
              this.props.resetMessaging();
              Actions.UserFeed({ type: ActionConst.REPLACE });
            }
          }}
        />
        <TouchableOpacity
          onPress={() => {
            if (Actions.currentScene === "UserProfile") {
              return;
            } else {
              this.props.resetMessaging();
              Actions.UserProfile({ type: ActionConst.REPLACE });
            }
          }}
        />
      </View>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  actions
)(MainTabBar);
