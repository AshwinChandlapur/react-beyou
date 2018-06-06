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
export default class Tan_Removal extends Component {
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
          <Text style={styles.header}>Add the pinch of turmeric to the yogurt and mix thoroughly till you get a uniform paste.</Text>
          <Text style={styles.text}>
          Apply this paste on your hands and leave it on for about 20 minutes.

          Rinse with cold water.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Apply the fresh aloe vera gel on your hands and leave it on overnight.</Text>
          <Text style={styles.text}>
          Wash off with normal water in the morning.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Take a basin full of warm water and add the lemon juice to it.

Mix well till the juice is diluted.
</Text>
          <Text style={styles.text}>
          Soak your hands in the lemon-infused water for about 20 minutes.

          Wash off with cold water.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Mix 2 tablespoons of fresh cucumber juice, 1 tablespoon of lemon juice and a pinch of turmeric till you get a smooth paste.
</Text>
          <Text style={styles.text}>
          Apply the paste on your hands and leave it on for 30 minutes.

          Wash off with cold water.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Soak the almonds in water overnight.

The next morning, blend the almonds with some milk and mix till you get a smooth paste.
</Text>
          <Text style={styles.text}>
          Apply this paste on your hands and leave it on overnight.

          Wash off with cold water the next morning.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Add 2 tablespoons of gram flour, a pinch of turmeric, 1 tablespoon of milk, a bowl of cold rose water to the bowl of rose water and mix them thoroughly till you get a smooth paste.
</Text>
          <Text style={styles.text}>
          Apply the paste on your hands and leave it on for about 20 minutes, allowing it to dry.

          Wash off with cold water.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Peel the skin of 3 potatoes.

Slice them into chunks and add them to a blender to make a paste.
</Text>
          <Text style={styles.text}>
          Apply this paste on your hands and leave it on for about 30 minutes.

          Wash off with cold water.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Mix 2 tablespoons each of honey, lemon juice, milk powder and almond oil in a bowl till you get a cream-like consistency.

Apply the cream on your hands and leave it on for about 20 minutes.
</Text>
          <Text style={styles.text}>
          Wash off with cold water.

          You can store this cream for about a week.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Mix sandalwood powder and turmeric powder, and add rose water to get a thick paste.
</Text>
          <Text style={styles.text}>
          Apply this paste on your hands and leave it on for about 30 minutes.

          Wash off with cold water.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Cut the papaya into small cubes.

Take a bowlful of the cubes and mash them well.

Add honey and mix well till you get a nice paste.
</Text>
          <Text style={styles.text}>
          Apply this paste on your hands and leave it on for about 30 minutes.

          Rinse off with cold water.</Text>
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

AppRegistry.registerComponent("Tan_Removal", () => Tan_Removal);
