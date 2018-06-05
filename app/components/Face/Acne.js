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
export default class Acne extends Component {
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
          <Text style={styles.header}>Crush up the Mint leaves thoroughly.</Text>
          <Text style={styles.text}>Rub the juice and crushed leaves on your face and leave for 5-10 minutes before rinsing off thoroughly with cold water.</Text>
        </View>
        {/* Second screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Either extract the garlic juice and mix it with 1 teaspoons or so of water, or mash up 2-3 cloves and let sit in water for about 10 minutes.</Text>
          <Text style={styles.text}>Using a cotton pad, soak up the juice or garlic water and cover problem spots.</Text>
        </View>
        {/* Third screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Boil a pot of water, pour into a large bowl, and let it cool for a few minutes.

After its temperature has lowered slightly, place your face above the bowl, and drape the towel over your head to trap the steam.</Text>
          <Text style={styles.text}>After 10-15 minutes, remove the towel and pat your face dry.</Text>
        </View>
        {/* Fourth screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Wash your face with water and pat dry.

Using your fingertips or a Q-tip, apply the aloe-vera directly to your problem areas.</Text>

        </View>
        {/* 5 screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Grind/pound up your orange peels and add a little water to create a paste, apply it to your face and/or problem areas.</Text>
          <Text style={styles.text}>Wait for 20-25 minutes, then wash.</Text>
        </View>
        {/* 6 screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Mash up the flesh of the papaya well, until it is of a consistency that can be easily applied to your skin.</Text>
          <Text style={styles.text}>Leave it on for 15-20 minutes, and then rinse off completely with warm water.</Text>
        </View>
        {/* 7 screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Separate the whites from the yolks of two eggs.

You can use as many as you like, but normally 2 to 3 is enough.
</Text>
          <Text style={styles.text}>Whisk the whites until theyre frothy, and let them sit for a few minutes.

          Allow the mask to sit and dry for about 20 minutes before rinsing off completely with warm water.</Text>
        </View>
        {/* 8 screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>

Mix 2 tablespoons of honey and 1 teaspoon of cinnamon together until they are thoroughly blended and have formed a sort of paste.
</Text>
          <Text style={styles.text}>Apply the mask to your face (or spot treat) and leave on for 10-15 minutes.

          Rinse off completely.</Text>
        </View>
        {/* 9 screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Using a ratio of 1 part vinegar to 3 parts water, dip a cotton ball into vinegar and apply it directly to the blemish.</Text>
          <Text style={styles.text}>Leave on for at least 10 minutes, or overnight.</Text>
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

AppRegistry.registerComponent("Acne", () => Acne);
