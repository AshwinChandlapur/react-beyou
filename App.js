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

import Fair_Skin from "./app/components/Face/Fair_Skin";
import Dark_Lips from "./app/components/Face/Dark_Lips.js";
import Acne from "./app/components/Face/Acne.js";
import BlackHeads from "./app/components/Face/BlackHeads.js";
import Blemishes from "./app/components/Face/Blemishes.js";
import Face_Cleanser from "./app/components/Face/Face_Cleanser.js";
import Face_Scrub from "./app/components/Face/Face_Scrub.js";
import Teeth_Whitening from "./app/components/Face/Teeth_Whitening.js";

import Dandruff from "./app/components/Hair/Dandruff.js";
import Grey_Hair from "./app/components/Hair/Grey_Hair.js";
import Hair_Conditioning from "./app/components/Hair/Hair_Conditioning.js";
import Hair_Loss from "./app/components/Hair/Hair_Loss.js";
import Split_Ends from "./app/components/Hair/Split_Ends.js";

import Beautiful_Eyes from "./app/components/Eyes/Beautiful_Eyes.js";
import Dark_Circles from "./app/components/Eyes/Dark_Circles.js";
import Eyebrows from "./app/components/Eyes/Eyebrows.js";
import Puffiness from "./app/components/Eyes/Puffiness.js";
import Sunken_Eyes from "./app/components/Eyes/Sunken_Eyes.js";

import DryAndRoughHands from "./app/components/Arms&Feet/DryAndRoughHands.js";
import Nails from "./app/components/Arms&Feet/Nails.js";
import Tan_Removal from "./app/components/Arms&Feet/Tan_Removal.js";
import Underarms from "./app/components/Arms&Feet/Underarms.js";

import Heat from "./app/components/Skin/Heat.js";
import Stretch_Marks from "./app/components/Skin/Stretch_Marks.js";
import Warts from "./app/components/Skin/Warts.js";

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
  },
  Fair_Skin:{
    screen: Fair_Skin,
    navigationOptions: {
      title: "Fair_Skin"
    }
  },
  Acne:{
    screen: Acne,
    navigationOptions: {
      title: "Acne"
    }
  },
  BlackHeads:{
    screen: BlackHeads,
    navigationOptions: {
      title: "BlackHeads"
    }
  },
  Blemishes:{
    screen: Blemishes,
    navigationOptions: {
      title: "Blemishes"
    }
  },
  Dark_Lips:{
    screen: Dark_Lips,
    navigationOptions: {
      title: "Dark_Lips"
    }
  },
  Face_Cleanser:{
    screen: Face_Cleanser,
    navigationOptions: {
      title: "Face_Cleanser"
    }
  },
  Face_Scrub:{
    screen: Face_Scrub,
    navigationOptions: {
      title: "Face_Scrub"
    }
  },
  Teeth_Whitening:{
    screen: Teeth_Whitening,
    navigationOptions: {
      title: "Teeth_Whitening"
    }
  },
  Dandruff:{
    screen: Dandruff,
    navigationOptions: {
      title: "Dandruff"
    }
  },
  Grey_Hair:{
    screen: Grey_Hair,
    navigationOptions: {
      title: "Grey_Hair"
    }
  },
  Hair_Conditioning:{
    screen: Hair_Conditioning,
    navigationOptions: {
      title: "Hair_Conditioning"
    }
  },
  Hair_Loss:{
    screen: Hair_Loss,
    navigationOptions: {
      title: "Hair_Loss"
    }
  },
  Split_Ends:{
    screen: Split_Ends,
    navigationOptions: {
      title: "Split_Ends"
    }
  },
  Beautiful_Eyes:{
    screen: Beautiful_Eyes,
    navigationOptions: {
      title: "Beautiful_Eyes"
    }
  },
  Dark_Circles:{
    screen: Dark_Circles,
    navigationOptions: {
      title: "Dark_Circles"
    }
  },
  Eyebrows:{
    screen: Eyebrows,
    navigationOptions: {
      title: "Eyebrows"
    }
  },
  Puffiness:{
    screen: Puffiness,
    navigationOptions: {
      title: "Puffiness"
    }
  },
  Sunken_Eyes:{
    screen: Sunken_Eyes,
    navigationOptions: {
      title: "Sunken_Eyes"
    }
  },
  DryAndRoughHands:{
    screen: DryAndRoughHands,
    navigationOptions: {
      title: "DryAndRoughHands"
    }
  },
  Nails:{
    screen: Nails,
    navigationOptions: {
      title: "Nails"
    }
  },
  Tan_Removal:{
    screen: Tan_Removal,
    navigationOptions: {
      title: "Tan_Removal"
    }
  },
  Underarms:{
    screen: Underarms,
    navigationOptions: {
      title: "Underarms"
    }
  },
  Heat:{
    screen: Heat,
    navigationOptions: {
      title: "Heat"
    }
  },
  Stretch_Marks:{
    screen: Stretch_Marks,
    navigationOptions: {
      title: "Stretch_Marks"
    }
  },
  Warts:{
    screen: Warts,
    navigationOptions: {
      title: "Warts"
    }
  },
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
