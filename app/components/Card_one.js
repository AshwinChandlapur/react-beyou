import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  StatusBar,
  ImageBackground,
  Alert
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Swiper from "./Swiper";
export default class Card_one extends Component {
  //to disable Status Bar
  componentDidMount() {
         StatusBar.setHidden(true);
      }
//To disable Toolbar
      static navigationOptions = {
    header: null ,
  };
  render() {
    return(
      <Swiper navigation={this.props.navigation}>
        {/* First screen */}
        <View style={styles.slide}>
          <Icon name="ios-home" {...iconStyles} />
          <Text style={styles.header}>Tip1</Text>
          <Text style={styles.text}>one</Text>
        </View>
        {/* Second screen */}
        <View style={styles.slide}>
          <Icon name="ios-people" {...iconStyles} />
          <Text style={styles.header}>Tip2</Text>
          <Text style={styles.text}>two</Text>
        </View>
        {/* Third screen */}
        <View style={styles.slide}>
          <Icon name="ios-videocam" {...iconStyles} />
          <Text style={styles.header}>Tip3</Text>
          <Text style={styles.text}>three</Text>
        </View>
        {/* Fourth screen */}
        <View style={styles.slide}>
          <Icon name="ios-videocam" {...iconStyles} />
          <Text style={styles.header}>Tip4</Text>
          <Text style={styles.text}>three</Text>
        </View>
      </Swiper>
    );
  }
}
const iconStyles = {
  size: 100,
  color: "#FFFFFF"
};
const styles = StyleSheet.create({
  // Slide styles
  slide: {
    flex: 1, // Take up all screen
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    backgroundColor: "#b89baf"
  },
  // Header styles
  header: {
    color: "#FFFFFF",
    fontFamily: "Avenir",
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 15
  },
  // Text below header
  text: {
    color: "#FFFFFF",
    fontFamily: "Avenir",
    fontSize: 18,
    marginHorizontal: 40,
    textAlign: "center"
  }
});

AppRegistry.registerComponent("Card_one", () => Card_one);
