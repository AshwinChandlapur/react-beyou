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
export default class Dark_Lips extends Component {
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
          <Text style={styles.header}>Make a thick paste by mixing three spoons of sugar powder with two spoons of butter.Use this mixture as a scrub over your lips.</Text>
          <Text style={styles.text}>Try this natural beauty tip two to three times a week to get lighter lips.</Text>
        </View>
        {/* Second screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Make a thick turmeric paste by mixing milk with turmeric powder.Apply a bit of the turmeric paste on all over your lips and let it remain there for not more than 2-3 minutes.</Text>
          <Text style={styles.text}>Exfoliate your lips again gently with the soft tooth brush.</Text>
        </View>
        {/* Third screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Squeeze a lemon and massage its fresh juice over your lips.</Text>
          <Text style={styles.text}>You can apply this home remedy every night before you sleep to get glossy and pink lips.</Text>
        </View>
        {/* Fourth screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>In a small bowl, mix in 1 teaspoon of freshly squeezed lemon juice and coconut oil.Add in and stir thoroughly.</Text>
          <Text style={styles.text}>Apply a little bit of the scrub to your lips, and scrub it in circular motion.</Text>
        </View>
        {/* Five screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Apply honey on all over your lips every night, let it dry and remain there overnight.</Text>
        </View>
        {/* Six screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>The deep purple color ingredient present in beetroot has natural properties to reduce gradually darkness of your lips.</Text>
        </View>
        {/* Seven screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Mix one spoon of strawberry with two spoons of petroleum jelly.</Text>
          <Text style={styles.text}>Try this as a lip balm daily to get glossy pink lips.</Text>
        </View>
        {/* Eight screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Make a paste by mixing raspberry with aloe vera and pure honey.</Text>
          <Text style={styles.text}>Massage and scrub your lips with this paste and rinse it off after 10 minutes.</Text>
        </View>
        {/* Nine screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Scrub olive oil onto your lips before you sleep at night to soften your lips and give natural glow to them.</Text>
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

AppRegistry.registerComponent("Dark_Lips", () => Dark_Lips);
