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
export default class Face_Cleanser extends Component {
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
          <Text style={styles.header}>Egg yolk contains natural cleansing properties.

Egg white just helps in toning your skin.

</Text>
          <Text style={styles.text}>Apply the whole egg or just yolk to cleanse your face.</Text>
        </View>
        {/* Second screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Rub a slice of pineapple on your clean face.</Text>
          <Text style={styles.text}>Pineapple will add freshness to your skin and leave your skin fair looking.</Text>
        </View>
        {/* Third screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Banana is a natural cleanser and moisturiser.

It provides your skin a glow and slows down the signs of aging.</Text>

        </View>
        {/* Fourth screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Strawberry holds so many benefits for our skin.

It is the best cleanser, great exfoliater, natural toner, and colour brightener.</Text>
          <Text style={styles.text}>Use strawberry juice to cleanse and tone your face.</Text>
        </View>
        {/* 5 screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Papaya add glow to your skin and cleanse thoroughly, removing every particle of dirt from your face.</Text>
          <Text style={styles.text}>It naturally hydrates your skin and provides you an instant fresh look.</Text>
        </View>
        {/* 6 screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Well, apple is great for everything.

Apple juice or apple pulp, both are great for cleansing the skin.</Text>
          <Text style={styles.text}>It gives glow and radiant look.</Text>
        </View>
        {/* 7 screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Honey works as a natural hydrant.

It removes the dust from your face, while providing your face glow and shine.</Text>
          <Text style={styles.text}>The combo of honey and lemon will also do a great work on your skin.Mixing yogurt and honey and applying it will make your skin deeply cleansed.</Text>
        </View>
        {/* 8 screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Mango helps to cleanse your skin deeply.

Mango works as toner and rejuvenates your skin.</Text>
          <Text style={styles.text}>It makes your skin supple and soft and slows down the signs of ageing.</Text>
        </View>
        {/* 9 screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Using pomegranate on a daily basis can help in removing tan and deeply cleansing your skin.</Text>
          <Text style={styles.text}>Use this to gain naturally fair colour.</Text>
        </View>
        {/* 10 screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>If you have dry skin, then watermelon is the correct fruit for you.

Watermelon naturally hydrates your face.</Text>
          <Text style={styles.text}>It seals the moisture within your skin, which helps to get rid of dry skin.

Use watermelon juice as a facial cleanser on a daily basis.</Text>
        </View>
        {/* 11 screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Baking soda is a great exfoliater and works great as a cleanser.

All you need is to add jojoba oil and honey to baking soda</Text>

        </View>
        {/* 12 screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Almond oil is a major and rich source of vitamin E.

It gives the proper nourishment, your skin needs.

Adding honey in almond paste will make it a good cleanser.

Add an egg yolk for a powerful and super effective cleanser.</Text>
          <Text style={styles.text}>These three ingredients are enough to cleanse, nourish and moisturise your skin.

Using this cleanser on a daily basis can reduce wrinkles and help to treat acne or zits.</Text>
        </View>
        {/* 13 screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Gram flour will draw the dirt and excess oil out from the skin.

Turmeric will make your skin fair.</Text>
          <Text style={styles.text}>To combine gram flour and turmeric, you need a binder.

Add yogurt, as it will not only bind the ingredients, but also give moisture to your skin.</Text>
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

AppRegistry.registerComponent("Face_Cleanser", () => Face_Cleanser);
