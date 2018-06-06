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
export default class DryAndRoughHands extends Component {
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
          <Text style={styles.header}>Mash 1 overripe banana into a thick paste and apply it on your hands.

Leave it on for about 30 minutes before washing it off with lukewarm water.</Text>
          <Text style={styles.text}>
          Follow it with some hand moisturizer.</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.header}>Cut open a fresh aloe vera leaf and remove the gel-like substance.

Apply the gel on your hands and massage gently for a few minutes.
</Text>
          <Text style={styles.text}>
          Let it sit for 10 to 15 minutes, then rinse it off with lukewarm water.

          Use this remedy 1 or 2 times daily.</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.header}>Rub a little honey all over your hands and leave it on for about 10 minutes.

Then rinse it off with lukewarm water.</Text>
          <Text style={styles.text}>
          Repeat 1 or 2 times daily to enjoy soft hands.</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.header}>Rub some fresh milk cream on your hands.
</Text>
          <Text style={styles.text}>
          Allow it to sit for 10 minutes, then rinse off your hands thoroughly with lukewarm water.

          You can use this remedy daily.Apply warm extra-virgin coconut oil on your hands.

Massage for about 5 minutes using circular motions before going to bed.

Wear gloves overnight for best results.

Repeat this simple remedy daily.</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.header}>Apply warm extra-virgin coconut oil on your hands.

Massage for about 5 minutes using circular motions before going to bed.
</Text>
          <Text style={styles.text}>
          Wear gloves overnight for best results.

          Repeat this simple remedy daily.</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.header}>Prepare a mixture with 2 tablespoons of ground oatmeal, ½ to 1 teaspoon of honey and a little water to make a paste.

You can also add a little freshly squeezed lemon juice.
</Text>
          <Text style={styles.text}>
          Rub this mixture on your hands.

          Leave it on for 10 minutes and then rinse it off with warm water.</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.header}>Massage your hands with some warm olive oil for 5 to 10 minutes twice daily to enjoy soft and smooth hands.

Mix equal amounts of olive oil and fine sugar.

Rub this homemade scrub on your hands using light, circular motions for a few minutes.
</Text>
          <Text style={styles.text}>
          Wait 5 minutes, then rinse it off with warm water, pat dry and apply a light moisturizer.

          Use this remedy twice a week to soften your hands.</Text>
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

AppRegistry.registerComponent("DryAndRoughHands", () => DryAndRoughHands);
