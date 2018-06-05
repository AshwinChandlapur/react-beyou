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
export default class Beautiful_Eyes extends Component {
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
          <Text style={styles.header}>Eat adequate quantities of vitamin A and vitamin C; fill up on carrots, sweet potatoes, squash and spinach for vitamin A and guavas, bell peppers, citrus fruits and papayas for vitamin C.</Text>

        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>A very simple method to relax eyes and add sparkle to them is by rubbing the palms of your hands together till they become warm before placing them on closed eyes for a few minutes – the eyes feel rested and fresh.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Rinse your eyes well, after removing make-up with a remover.

Wash well and pat the eyes gently with a soft towel to dry them.</Text>

        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Keeping a bowl of hot water ready – first rub a piece of ice gently over eyelids in a circular movement, immediately follow this with applying cotton dipped in hot water or splash it on the eyes, repeat this hot and cold procedure 7-8 times.</Text>
          <Text style={styles.text}>Not only do the eyes feel rested they definitely sparkle.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Prepare a strong, black tea decoction by adding 1 teaspoonful tea leaves to 1/4th cup of boiling water and steep it for 5-6 minutes.

Keep this tea to cool in the fridge, soak cotton wool pads in the decoction and place on closed eyelids while lying down.
</Text>
          <Text style={styles.text}>
          Warm tea may be used if you can’t use cold tea.

          Leave it on for 15 -20 minutes for best results.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Soak a teaspoon full of Indian gooseberry powder in a glass of water overnight, strain the water through a muslin cloth and splash eyes with this .</Text>

        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Apple juice has proved to be beneficial to some people.

Grate fresh apples and squeeze the juice through a muslin cloth, soak cotton pads in the juice and place on closed eyes.</Text>
          <Text style={styles.text}>Relax for 15 – 20 minutes, repeat as required.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Remember to wear sunglasses to protect eyes from the glare of sunlight or strong, dusty winds.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Try to relax with a bit of meditation, or yoga or deep breathing along with a positive attitude – your eyes will reflect inner peace.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>At first, pour a little virgin coconut oil on the palms.

Then, apply this oil around your eyes.

Now, gently massage it with your fingers.

</Text>
          <Text style={styles.text}>After that, leave it on your skin for about 2 to 3 hours.

          Finally, wash the skin around your eyes with clean water.</Text>
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

AppRegistry.registerComponent("Beautiful_Eyes", () => Beautiful_Eyes);
