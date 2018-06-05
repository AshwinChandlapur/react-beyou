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
export default class Hair_Conditioning extends Component {
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
          <Text style={styles.header}>Warm up the distilled water until it is comfortably warm (not hot).

Separate the egg white and gently whisk it while adding the warm water until you get a nice and even mixture.
</Text>
          <Text style={styles.text}>
          After washing your hair) apply it through your hair starting at your roots and slowly work your way to the ends .

          Leave it in for 5 minutes then rinse with lukewarm water.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Mix the Apple Cider Vinegar and the water thoroughly.

Apply evenly to your hair; let it sit for a minute and then rinse out with lukewarm or cool water.</Text>
          <Text style={styles.text}>
          Cool water will help close the cuticles for an even better effect.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Mash the bananas to a nice squishy paste and apply it to your hair.</Text>
          <Text style={styles.text}>Leave it for 10 minutes and then wash with lukewarm water.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Cut the avocado, take out the pit and scoop out the fleshy meat and mash this into a nice paste.

Then add the coconut milk and oil and mix until you get an evenly blended substance.</Text>
          <Text style={styles.text}>
          Work it into your hair and let it rest for 15 minutes.

          Rinse out with lukewarm water.</Text>
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

AppRegistry.registerComponent("Hair_Conditioning", () => Hair_Conditioning);
