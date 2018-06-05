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
export default class Face_Scrub extends Component {
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
          <Text style={styles.header}>Mix powdered sugar, vanilla extract and cocoa powder.

Pour a few drops of almond oil to create a greasy mixture.</Text>
          <Text style={styles.text}>If you have an oily or combination skin, use this scrub every alternate day.

          But if your skin is dehydrated and sensitive, don’t use it more than twice a week.</Text>
        </View>
        {/* Second screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Mix finely grounded oatmeal with avocado.

Pour a few drop of honey over it.

Mix it with a spoon until you get a paste-like consistency.

Scrub it on the face after applying evenly.
</Text>
          <Text style={styles.text}>
          Rinse off with warm water.

          This scrub will provide moisture, softness and glow to your skin.</Text>
        </View>
        {/* Third screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>This scrub is the most easiest to make.

All you need to do is get a cucumber and peel it.

Then mash it well to create a scrub.

Apply it on the face and massage it in one direction with your fingertips.
</Text>
          <Text style={styles.text}>
          Remove it completely with the help of water.

          The cucumber will provide the required moisture to your skin.</Text>
        </View>
        {/* Fourth screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Convert the almonds in a powdered form by using a blender.

Thereafter, pour honey in the almond powder.</Text>
          <Text style={styles.text}>Apply it evenly on the face and rinse with warm water after a few minutes.

          The ingredients are very beneficial as almonds are very good lightening agents, and honey will provide smooth and supple skin.</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.header}>Cut the peeled cucumber into slices and blend them.

Add yogurt, oatmeal and honey to it.

Mix all these things well to create a paste.
</Text>
          <Text style={styles.text}>Dampen your face with water.

          Apply the paste evenly and massage gently.

          In the end, rinse off with cold water.</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.header}>First of all, mash the banana in a bowl and pour milk in it.

Thereafter, add oats to it and prepare a paste.
</Text>
          <Text style={styles.text}>
          Apply this mixture evenly on the face and neck.

          Massage gently for almost 3-4 minutes to remove the dead skin.

          Rinse well with lukewarm water to get the best results.</Text>
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

AppRegistry.registerComponent("Face_Scrub", () => Face_Scrub);
