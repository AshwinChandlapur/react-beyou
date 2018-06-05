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
export default class Dandruff extends Component {
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
          <Text style={styles.header}>Grind some ginger and beetroot to make a paste.

Massage your scalp with the paste and leave it overnight.

Rinse it off thoroughly the next morning.</Text>
          <Text style={styles.text}>
          Follow this routine for continuous 4-5 nights.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Apply some onion paste on your scalp.

Leave it on for one hour.
</Text>
          <Text style={styles.text}>
          Wash it off thoroughly and apply some fresh lemon juice to get rid of the smell of the onion out of your hair.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Make a paste of tulsi and amla powder mixed with some water.

Massage this paste on the scalp.
</Text>
          <Text style={styles.text}>Let it remain for half an hour.

          Wash the hair thoroughly with water and shampoo.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Crush some neem leaves to make a fine paste and apply it directly on to your dry scalp.</Text>
          <Text style={styles.text}>Keep this paste for an hour and then clear it off using warm or cold water</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Make a paste with equal quantities of apple and orange and apply it on the scalp.</Text>
          <Text style={styles.text}>
          Wash your hair after 20-30 minutes with a shampoo.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Mix 1 tbsp of lemon juice with 5 tbsp of coconut oil and then apply the mixture on the scalp.</Text>
          <Text style={styles.text}>
          Leave this mixture for about 20-30 minutes and then wash it off with a good shampoo.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>20 minutes before you take a shower rub aloe vera gel on your scalp.</Text>
          <Text style={styles.text}>
          Leave on for full 20 minutes, and then wash your hair with a shampoo.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Beat 2 eggs and apply the paste on your scalp and rinse it off after one hour.</Text>
          <Text style={styles.text}>
          This treatment will assist in preventing dandruff and hair fall.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Prepare a mixture of equal amounts of vinegar and water.

Apply this on your scalp and leave it on overnight.</Text>
          <Text style={styles.text}>
          Wash your hair the next morning with a mild baby shampoo.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Soak 2 tbsp of fenugreek seeds in water overnight and crush them into a fine paste next morning.

Apply this paste to your hair and scalp for at least 30 minutes.</Text>
          <Text style={styles.text}>Wash your hair thoroughly after 30 minutes.

          Follow this treatment for continuous four weeks, for best results.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Take peels of 3-4 lemons and boil them in 4-5 cups of water for approximately 15-20 minutes.</Text>
          <Text style={styles.text}>
          Once it cools down, use this solution to wash your hair, at least once a week.</Text>
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

AppRegistry.registerComponent("Dandruff", () => Dandruff);
