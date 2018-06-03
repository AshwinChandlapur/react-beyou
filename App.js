/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, StatusBar, Text, View } from "react-native";
import { StackNavigator } from "react-navigation";
import SplashScreen from "react-native-splash-screen";
import Screen from "./app/components/Screen";
import Swiper from "./app/components/Swiper";
import Main from "./app/components/Main";
import Face from "./app/components/Cards/Face";
import Hair from "./app/components/Cards/Hair";
import Skin from "./app/components/Cards/Skin";
import Eyes from "./app/components/Cards/Eyes";
import ArmsAndFeet from "./app/components/Cards/ArmsAndFeet";
import Card_one from "./app/components/Card_one";

/*const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});*/

class Home extends Component<{}> {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null
    },
    header: null
  };
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#16a085" />
        <Main navigation={this.props.navigation} />
      </View>
    );
  }
}

export default App = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Home"
    }
  },
  Screen: {
    screen: Screen,
    navigationOptions: {
      title: "Screen"
    }
  },
  Swiper: {
    screen: Swiper,
    navigationOptions: {
      title: "Swiper"
    }
  },
  Main: {
    screen: Main,
    navigationOptions: {
      title: "BeYou"
    }
  },
  Card_one:{
    screen: Card_one,
    navigationOptions: {
      title: "Card_one"
    }
  },
  Face:{
    screen: Face,
    navigationOptions: {
      title: "Face"
    }
  },
  Hair:{
    screen: Hair,
    navigationOptions: {
      title: "Hair"
    }
  },
  Skin:{
    screen: Skin,
    navigationOptions: {
      title: "Skin"
    }
  },
  Eyes:{
    screen: Eyes,
    navigationOptions: {
      title: "Eyes"
    }
  },
  ArmsAndFeet:{
    screen: ArmsAndFeet,
    navigationOptions: {
      title: "ArmsAndFeet"
    }
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
