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
export default class BlackHeads extends Component {
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
          <Text style={styles.text}>In order to apply this method, you have to collect 1 teaspoon of milk, 1 tablespoon of raw honey (organic honey is must), and clean strip of cotton.Take the milk and honey and mix together.

Heat the mix for 5-10 seconds in a microwave until they form as a paste.

When the temperature becomes comfortable to use, apply the paste over your skin.

Now, put a strip of clean and dry cotton onto it.

Let the paste dry.

Then, peel the strip and rinse your face with cold water.</Text>
        </View>
        {/* Second screen */}
        <View style={styles.slide}>
          <Text style={styles.text}>In order to use this mask, you just need an egg, some pieces of facial tissue (or toilet papers), a clean towel, and a small bowl.

After gathering these, you have to break the egg and separate the white from the yolk.

At first, Wash and pat dry your face.

Then, apply the thin egg’s white layer over your skin.

In order to apply the layer, you can place a strip of tissue over the thin layer, then press it onto your face very gently.When the first layer will dry, carefully apply this method again for the second and third time.

Let the mask dry properly.

It will make you feel tighten in the skin.

Now, peel the tissue layers, and gently wash your face to make sure that all residues are cleaned properly.

Finally, pat dry your face.</Text>
        </View>
        {/* Third screen */}
        <View style={styles.slide}>
          <Text style={styles.text}>This method requires 1 teaspoon of cinnamon powder, 1 teaspoon of organic honey, and clean strips of cotton.At first mix the cinnamon powder and the honey together until the both properties turns into paste.

When the paste is prepared, apply a thin layer over your affected area.

Now, press a clean strip of cotton over it.

Sit down for 3 to 5 minutes, then remove the paste and clean your face gently but properly.</Text>
        </View>
        {/* Fourth screen */}
        <View style={styles.slide}>
          <Text style={styles.text}>In this method, you just need 1 lemon, a small bottle and cotton balls.Clean your face, then pat dry.

Now take the lemon, squeeze it and keep the juice into a small bottle.

Take a small cotton ball, then dampen the cotton ball using the juice.

Apply it to your affected areas at bedtime.

After getting up from bed, rinse your face with water, and apply moisturizer.

You can store the rest of the juice in a refrigerator up to a week.</Text>
        </View>
        {/* Five screen */}
        <View style={styles.slide}>
          <Text style={styles.text}>In order to apply this method, you need some baking soda, and fresh water.Mix Water with baking soda to form a paste that is thick, but spreadable.

Massage the paste using a circular motion into your skin.

Now rinse thoroughly with fresh and a little cold water.

Finally, pat dry your face and use a moisturizer.</Text>
        </View>
        {/* Six screen */}
        <View style={styles.slide}>
          <Text style={styles.text}>You can make a mask by combining two tablespoons of oats, three tablespoons of yogurt.

If you want, then you can also use 1 or 2 teaspoons of lemon juice.

Apply the mask to your whole face or even the infected area and leave for a couple of minutes and after that wash your face with cold water.</Text>
        </View>
        {/* Seven screen */}
        <View style={styles.slide}>
          <Text style={styles.text}>Take a medium size tomato and mash it with fork or even with your hand.

Apply this mask to your face or over your blackheads.

Rub the area for 2 minutes.

Leave it for fifteen minutes.

After that was your face or skin.</Text>
        </View>
        {/* Eight screen */}
        <View style={styles.slide}>
          <Text style={styles.text}>Mix olive oil and sugar.

Rub it into the affected area.

Rub this mask for 1 minute.

After that wash your face with clean water.</Text>
        </View>
        {/* Nine screen */}
        <View style={styles.slide}>
          <Text style={styles.text}>Take 2 teaspoon of turmeric and 3 teaspoons of mint juice.

You can more or less according to your needs.

Apply this paste all over your skin and leave it for ten minutes and wash your skin.</Text>
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

AppRegistry.registerComponent("BlackHeads", () => BlackHeads);
