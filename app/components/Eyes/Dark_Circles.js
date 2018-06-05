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
export default class Dark_Circles extends Component {
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
          <Text style={styles.header}>Cut a cucumber into thick slices and place in refrigerator for 30 minutes to cool.

Place cold slices on the affected area and leave for 10 – 15 minutes.

</Text>
          <Text style={styles.text}>Rinse with water.

          Repeat twice daily until results are visible.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Apply a small amount of almond oil to the affected area and gently massage for 3 – 4 minutes.

Leave overnight and rinse with water the next morning.
</Text>
          <Text style={styles.text}>
          Repeat daily until results are visible.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Use a cotton ball to apply a few drops of lemon juice to the affected area.

Leave for 10 – 15 minutes and rinse with water.
</Text>
          <Text style={styles.text}>
          Repeat regularly until results are visible.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Grate 1 – 2 chilled potatoes to extract its juice.

Use a cotton ball to apply the juice to the affected area.

Leave for 10 – 15 minutes and rinse with cool water.

</Text>
          <Text style={styles.text}>Repeat regularly until results are visible.

          Note: Alternately place thick potato slices on the affected areas for 12 – 15 minutes.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Mix 1/2 teaspoon of turmeric powder and pineapple juice to make a paste.

Apply to the affected area and leave for 10 minutes.

</Text>
          <Text style={styles.text}>Rinse with water and pat dry.

          Repeat daily until results are visible.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Combine equal quantities of tomato juice and lemon juice.

Use a cotton ball to apply the juice to the affected area.

</Text>
          <Text style={styles.text}>Leave for 10 minutes and rinse with water.

          Repeat daily until results are visible.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Cut a ripe apple into thick pieces.

</Text>
          <Text style={styles.text}>Apply to the affected area for 30 minutes and rinse with cold water.

          Repeat regularly until results are visible.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Soak a clean wash cloth in cold water or milk for 2 – 3 minutes.

Wring the cloth and apply directly to affected area.

</Text>
          <Text style={styles.text}>Leave for 3 – 5 minutes.

          Repeat 2 – 3 times until results are visible.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Apply crushed mint leaves to the affected area.

Leave for 5 – 10 minutes and wipe with clean cloth.
</Text>
          <Text style={styles.text}>
          Repeat regularly until results are visible.</Text>
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

AppRegistry.registerComponent("Dark_Circles", () => Dark_Circles);
