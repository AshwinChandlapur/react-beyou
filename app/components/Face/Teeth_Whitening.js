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
export default class Teeth_Whitening extends Component {
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
          <Text style={styles.header}>Put a few leaves of holy basil in the sun for a few hours.

When the leaves are dry, grind them into powder form.

</Text>
          <Text style={styles.text}>Mix the powder with your regular toothpaste and brush your teeth.</Text>
        </View>
        {/* Second screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Mix together a few drops of lemon juice and some salt.

Apply the mixture on the stained teeth and rub the paste vigorously over your teeth and gums.

</Text>
          <Text style={styles.text}>Leave it on for a few minutes and then rinse your mouth thoroughly with water.

          Do this twice daily for about two weeks to get rid of tartar and the yellow tinge.</Text>
        </View>
        {/* Third screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Rinse and gargle with a mouthwash that has hydrogen peroxide.

Make sure not to swallow the hydrogen peroxide.

You can also make a paste of baking soda with hydrogen peroxide and gently brush your teeth with it.

Later, brush your teeth with your regular toothpaste.

</Text>
          <Text style={styles.text}>Note: Use hydrogen peroxide with extra caution as it can cause irritation of the gums and make your teeth sensitive.</Text>
        </View>
        {/* Fourth screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Rub orange peel over your teeth every night before going to sleep. </Text>
          <Text style={styles.text}>The vitamin C and calcium in the orange peel will combat the microorganisms throughout the night.

          Do this for a few weeks and you will notice effective results.</Text>
        </View>
        {/* Fourth screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Take 1-3 large strawberries, a pinch of seat salt and 1/2 teaspoon of baking soda (optional).

Now mash the berries into a pulp, and add a pinch of sea salt and ½ teaspoon of baking soda, if you’re using it.
</Text>
          <Text style={styles.text}>
          Wipe any extra saliva off your teeth with a paper towel, and then apply a generous portion of the mixture to a toothbrush and apply.

          Let the mixture sit for 5 minutes, then rinse. </Text>
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

AppRegistry.registerComponent("Teeth_Whitening", () => Teeth_Whitening);
