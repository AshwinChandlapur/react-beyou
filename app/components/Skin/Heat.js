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
export default class Heat extends Component {
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
          <Text style={styles.header}>Add some margosa oil in Camphor to make a sticky paste.

Apply it on your rashes.
</Text>
          <Text style={styles.text}>
          It gives cooling and refreshing feel.

          You can also apply margosa leaf directly to the skin to calm burning sensation.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Take some dry barks of Banyan tree and crush them into a fine powdered form.</Text>
          <Text style={styles.text}>
          Apply this powder on the rashes to fasten the healing process.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Mix together corn starch or corn flour with some water and prepare a smooth paste.</Text>
          <Text style={styles.text}>
          Apply this paste on the prickly heat and leave it on for about half an hour.

          After it gets dry, wash it with cold water.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>You may use any herbal talcum powder and put it all over your body.</Text>
          <Text style={styles.text}>
          Avoid using scented talcum powder as it may enhance the irritation.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Crush some fresh ginger root and allow it to boil in water.</Text>
          <Text style={styles.text}>
          Once the water cools down then wipe your skin with this solution using a soft cloth or sponge.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Take a watermelon, remove its seeds and make a pulp.

Apply this pulp onto the rashes for instant relief.
</Text>
          <Text style={styles.text}>
          Alternatively, you can also drink a glass of crushed watermelon juice.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Mix together chickpea flour and some water to make a thick paste.
</Text>
          <Text style={styles.text}>
          Apply it onto the affected site and leave it on for about 15 minutes.

          Rinse off the paste with cool water.</Text>
        </View>

        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Cut some medium sized potatoes into a number of slices and then rub them on the affected portions.</Text>
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

AppRegistry.registerComponent("Heat", () => Heat);
