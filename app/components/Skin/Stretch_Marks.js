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
export default class Stretch_Marks extends Component {
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
          <Text style={styles.header}>After taking a hot shower, pat your skin dry and apply baby oil on the affected area.

Massage well so that the oil gets absorbed into the skin.</Text>
          <Text style={styles.text}>
          Let the oil dry naturally.

          This usually takes a few minutes.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Mix coffee grounds with water to make a paste.

Scrub this well over the affected area.

Scrub in gentle, circular motions for three to five minutes.</Text>
          <Text style={styles.text}>
          Rinse with warm water and moisturize.

          You can add a tablespoon or two of olive oil or aloe vera gel for better.</Text>
        </View>

        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Warm the castor oil slightly and massage it on the stretch marks for 15 to 20 minutes.</Text>
          <Text style={styles.text}>
          Do this every day before going to bed.</Text>
        </View>

        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Take out fresh gel from an aloe vera leaf and to it, add oil from the vitamin A and E capsules.

Mix well.

Massage this on the skin until it is fully absorbed.
</Text>
          <Text style={styles.text}>
          Do not rinse.

          You can also apply only aloe vera gel.

          Leave it on for 15 minutes, and wash with lukewarm water.</Text>
        </View>

        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Massage shea butter on the affected areas and leave it on</Text>
          <Text style={styles.text}>
          Reapply a few times during the day.</Text>
        </View>

        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Prepare the mixture of 1/2 cup cocoa butter, 1 tablespoon wheat germ oil, 2 teaspoons beeswax, 1 tablespoon apricot oil, 1 tablespoon vitamin E oil and 1 tablespoon kernel oil.

Heat it till the beeswax has melted completely.
</Text>
          <Text style={styles.text}>
          Store this mixture in an airtight container in your refrigerator.

          Apply the mixture on the stretch marks and massage for a few minutes till it is well absorbed by the skin.</Text>
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

AppRegistry.registerComponent("Stretch_Marks", () => Stretch_Marks);
