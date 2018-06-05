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
import Swiper from "../Swiper.js";
export default class Face_Scrub extends Component {
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
          <Text style={styles.header}>Soak a few drops of rose water on Two Cotton Pads for 2-3 Minutes.</Text>
          <Text style={styles.text}>Apply directly to affected Area. Repeat Twice Daily until results are visible.</Text>
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
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10
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

AppRegistry.registerComponent("Face_Scrub", () => Face_Scrub);
