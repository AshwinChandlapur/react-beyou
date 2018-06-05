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
export default class Sunken_Eyes extends Component {
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
          <Text style={styles.header}>Yes! This is the real, primary and an effective home remedy for sunken eyes Ensure you get at least 8 hours of sleep every day.</Text>
          <Text style={styles.text}>Besides, it makes no harm if you take a small nap during the day not more than 30 minutes!</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Apply almond oil under the eyes several times a day.</Text>
          <Text style={styles.text}>Almond oil is rich in Vitamin E, a nourishing vitamin for skin.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Slice the potatoes and place it on the affected spot for around 20 minutes.</Text>
          <Text style={styles.text}>Alternatively, you can apply the juice of raw potato directly on the hollow spots.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>The sore and darker skin gets replenished with improved blood circulation.

It also relaxes the eye muscles and soothes the nerves.

You can place the warm as well as cool tea bags as you desire.</Text>
          <Text style={styles.text}>It is good if you can use green tea bags.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Never ever try to move out in the sun without wearing a moisturizing sunscreen.</Text>
          <Text style={styles.text}>Invest in some good quality moisturizing sunscreen to prevent further damage to the sunken eyes.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>You can apply the sandalwood paste on the dark circles or go with sandalwood essential oils.</Text>
          <Text style={styles.text}>Either way, it improves the dark circles, soothes the tired skin and gives a replenished skin</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Here is another trick to improve the blood circulation in your face to improve the hollow eyes.

Just splash some cold water on your face.
</Text>
          <Text style={styles.text}>Even running water would do!</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Get some rest by placing sliced cucumber on eyes and wake up with fresh, rejuvenated and energetic eyes.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Fish Oil is a good source of omega fatty acids that helps in making your skin smooth and healthy when it is applied topically around the eyes.</Text>

        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Extract the juice of fresh lemon and dilute with water.

Apply this on the skin around the eyes.</Text>
          <Text style={styles.text}>Lemon juice is a good remedy for treating dark patchy skin and it helps in removing dead skin cells around the eyes.</Text>
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

AppRegistry.registerComponent("Sunken_Eyes", () => Sunken_Eyes);
