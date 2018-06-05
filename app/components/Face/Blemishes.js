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
export default class Blemishes extends Component {
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
          <Text style={styles.header}>Break open one garlic capsule and squeeze the content into a one tablespoon of your moisturizer and dab it on the blemishes.</Text>
        </View>
        {/* Second screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Make a mix of one part of apple cider vinegar and eight parts of water.</Text>
          <Text style={styles.text}>Store the solution and rinse your face with it once or twice daily.</Text>
        </View>
        {/* Third screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Boil chamomile and lemon juice in water.

The application of this decoction helps heal blemishes on the skin.</Text>
          <Text style={styles.text}>This however works on best on blemishes caused due to acne scars.</Text>
        </View>
        {/* Fourth screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Mix some vinegar and 3 mashed potatoes.Apply this over the effected area over night.</Text>
        </View>
        {/* 5 screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Mash green papayas and apply to your face for 15 minutes.</Text>
        </View>
        {/* 6 screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Add sandalwood paste to water and apply it to your skin where the blemishes are.</Text>
          <Text style={styles.text}>Sandalwood is good for keeping your skin clear and free of acne or blemishes.
          Sandalwood also soothes a painful pimple or boil on the skin.</Text>
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

AppRegistry.registerComponent("Blemishes", () => Blemishes);
