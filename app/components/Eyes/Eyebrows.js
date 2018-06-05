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
export default class Eyebrows extends Component {
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
          <Text style={styles.header}>Apply some cold milk to eyebrows and leave it on for about 20 minutes.

Wash off.

</Text>
          <Text style={styles.text}>Repeat twice everyday for 2 months.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Massage eyebrows with olive oil to thicken hair growth.

Take care to massage in the same direction as the growth.
</Text>
          <Text style={styles.text}>
          As a bonus, the existing hair on the brow as well looks darker and softer with this massage.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Aloe vera gel is great when used regularly.

</Text>
          <Text style={styles.text}>Similarly, coconut oil too works magic for hair growth and massages.

          The same magic works for thickening eyebrows.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Soak a teaspoon of fenugreek seeds in water for 4 to 5 hours and make a paste.

</Text>
          <Text style={styles.text}>Apply on brows at bedtime.

          Wash off in the morning.

          You can also mix almond oil to this paste.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Fresh onion juice may be a bit pungent and smelly but it can help with the growth of eyebrows.</Text>

        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Apply egg yolk with finger tip or cotton balls on your eyebrows and keep it for 15 to 20 minutes and then wash off.</Text>
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

AppRegistry.registerComponent("Eyebrows", () => Eyebrows);
