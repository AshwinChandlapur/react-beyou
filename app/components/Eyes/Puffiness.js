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
export default class Puffiness extends Component {
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
          <Text style={styles.header}>Sometimes, it only needs a splash of cold water on your eyes and face.

You can even put some ice in water to make it really cold.</Text>
          <Text style={styles.text}>However, beware! Don’t apply this extremely cold water to the skin around your eyes more than a couple of seconds!</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Place 6-8 spoons in refrigerator and when they get very cold, take them out.

Place two spoon on your both the closed eyes.</Text>
          <Text style={styles.text}>When they get warm, use the next two cold spoons and so on.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Take ice cold water in a cup.

Dip two tea bags in it and take them out.

Squeeze the tea bags.

Lie down and close your eyes.

Place the two chilled tea bags on your eyes.

You can use black tea, chamomile or green tea bags.</Text>
          <Text style={styles.text}>The caffeine tea helps constrict blood vessels to reduce swelling around eyes while the anti-irritants in herbal teas reduce redness and inflammation.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Take an egg and separate its white portion in a bowl.

Beat this egg white till it gets stiff.

Take a brush (or use your fingers) and apply this stiff egg white around your eyes.</Text>
          <Text style={styles.text}>Leave it for about 15-20 minutes till it dries up.

Now wash your face with cold water.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Take out that chilled cucumber from the vegetable basket and cut it into roundels.

Take two slices and put back the rest of them in the fridge.

Now place these cucumber slices on your eyes and relax.</Text>
          <Text style={styles.text}>Let them be there for the time till they get warmed.

Now take two slice out of the fridge and repeat.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Cut a potato in round slices and place two slices on both of your eyes.

Leave them for 15-20 minutes and wash with cold water.

Peel and grate two potatoes and squeeze to get potato juice.</Text>
          <Text style={styles.text}>Dip two cotton balls in this juice and keep them on eyes for 20-25 minutes.

Remove and wash off with cold water</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Close your eyes and lightly press the ring finger under your eye.

Move your finger in arc shape from inside corner of your eye towards outside.

Make 10-15 rounds.</Text>
          <Text style={styles.text}>Be gentle enough because eyes are very sensitive organs.

Repeat the massaging movements for the other eye too.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>While more salt in your diet can lead to formation of eye bags, the salty warm water compress can reduce the same eye bags.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>When your body gets deprived of water, it starts accumulating water as a defense.</Text>
          <Text style={styles.text}>When you drink lots of water, it will automatically release water resulting in reduced puffiness.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Dip cotton pads in chilled milk and place on eyelids while relaxing.</Text>
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

AppRegistry.registerComponent("Puffiness", () => Puffiness);
