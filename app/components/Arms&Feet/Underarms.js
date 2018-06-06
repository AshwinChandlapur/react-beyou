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
export default class Underarms extends Component {
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
          <Text style={styles.header}>Mix baking soda and water to create a paste and apply to your underarms.</Text>
          <Text style={styles.text}>Gently scrub for a minute, then wash off with clean water and pat dry.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Cut a lemon into thick slices.

Rub it on dark underarms for few minutes.

Let the lemon juice stay on skin for 10 minutes.
</Text>
          <Text style={styles.text}>
          Rinse it off with water thoroughly.

          Repeat Daily.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Cut 1 medium sized potato into slices.

Rub a slice onto your underarms and let it dry for 10 minutes.
</Text>
          <Text style={styles.text}>
          Rinse with lukewarm water.

          Repeat 2 times a day will give fast results.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Cut a cucumber into slices and rub onto the dark underarm.

Allow to sit for a few minutes.
</Text>
          <Text style={styles.text}>
          Repeat this process 1 or 2 times in a day until you achieve the results.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Peel the orange and leave the skin to dry under the sun.

Grind into a power.

Mix 2 teaspoons of powdered orange peel with enough rose water and milk.

Stir into a thick paste and apply to the underarms.

Gently scrub the underarms and leave for 15 minutes.

Wash off with cold water.
</Text>
          <Text style={styles.text}>
          Repeat 3 times a week.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Mix 2 teaspoons of full fat cream milk, 1 tablespoon each of plain yogurt and gram flour.

Apply the milk paste on your dark underarms.

Leave for 10-15 minutes.
</Text>
          <Text style={styles.text}>
          Rinse the area thoroughly with cold water.

          Repeat 4 times a week.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Mix 2 teaspoons of gram flour and 1 teaspoon each of yogurt and lemon juice, and a pinch of turmeric.

Apply this paste to your dark underarms and gently massage it for 5 minutes.
</Text>
          <Text style={styles.text}>
          Wait for about 30 and then wash it with warm water.

          Follow this process daily for first 2 weeks and then twice a week to get more effective and quick results.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Mix 2 tablespoons of sandalwood powder and 1 tablespoon of rose water.

Stir well to make a thick paste and apply to dark armpits.

Leave for 15 minutes or until dry.

Rinse with cool water.
</Text>
          <Text style={styles.text}>
          Repeat daily.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Massage coconut oil on underarms for 10 to 15 minutes.

Rinse it off with mild soap and lukewarm water.
</Text>
          <Text style={styles.text}>
          Repeat 2 to 3 times daily.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Take rice flour and mix with enough vinegar to make a thick paste.

Then take hot shower and pat the skin dry.

Now apply the paste on your underarms and leave for 10 – 15 minutes to dry completely.
</Text>
          <Text style={styles.text}>
          Wash with warm water.

          Repeat the 3 times a week.</Text>
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

AppRegistry.registerComponent("Underarms", () => Underarms);
