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
export default class Warts extends Component {
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
          <Text style={styles.header}>Twice a day, scrape the whitish mush off the inside of banana peel, and apply it to your wart.

Wash your hands well afterwards to keep the warts from spreading.
</Text>
          <Text style={styles.text}>
          Repeat until the wart is gone.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Crush up ¼ cup or so of fresh, well-rinsed, basil leaves until they are mushy and “juicy.” Apply to the wart, cover with a bandage or clean cloth, and reapply daily until the wart is gone, about 1-2 weeks.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Pull the head off of a dandelion and rub the milk onto the wart, and cover it with a bandage.

Do this twice daily until the wart is gone.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>File away the wart if you can, and then cover it thoroughly in a thick layer of honey and wrap a piece of cloth around it.

Leave it like this for 24 hours, changing the bandage and reapplying the honey daily.</Text>
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

AppRegistry.registerComponent("Warts", () => Warts);
