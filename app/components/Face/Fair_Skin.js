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
export default class Fair_Skin extends Component {
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
          <Text style={styles.header}>Grind the dried orange peels till you get a powder.Mix a tablespoon of this powder with the yogurt till you get a smooth paste. </Text>
          <Text style={styles.text}>Apply this paste to your face and keep it on for about 20 minutes. Rinse with cold water.</Text>
        </View>
        {/* Second screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Mix the yogurt and lemon juice thoroughly.Apply the resultant paste to your face and leave it on for about 20 minutes. </Text>
          <Text style={styles.text}>Wash your face with cold water.</Text>
        </View>
        {/* Third screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Take the raw milk in a bowl and add the strands of saffron to it.Let the strands stay in the milk for three to four hours. Post that, apply this mix to your cleansed face. </Text>
          <Text style={styles.text}>Keep it on for about 20 minutes, after which you can wash off with lukewarm water.</Text>
        </View>
        {/* Fourth screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Apply the potato pulp to your face and let it stay for about 20 minutes.</Text>
          <Text style={styles.text}>Wash off with plain water.</Text>
        </View>
        {/*Fifth Screen*/}
        <View style={styles.slide}>
          <Text style={styles.header}>Dry the lemon rind in the sun and grind it till you get a fine powder.Mix the powder with the milk and make a smooth paste.</Text>
          <Text style={styles.text}>Apply this paste to your face and leave it on for 20 minutes. Wash your face with warm water, and immediately follow with a cooling toner.</Text>
        </View>
        {/*Six Screen*/}
        <View style={styles.slide}>
          <Text style={styles.header}>Take a tablespoon of raw honey and then warm it up by rubbing it with your fingertips.Apply the warm honey all over your face.</Text>
          <Text style={styles.text}>Leave this natural mask for about ten minutes and then wash it off gently with warm water. Pat your face dry with a fresh towel or cloth.</Text>
        </View>
        {/*Seven Screen*/}
        <View style={styles.slide}>
          <Text style={styles.header}>Pour four to five drops of raw honey on a piece of lemon wedge.Rub the lemon all over your face only for a single minute.</Text>
          <Text style={styles.text}>Wash your face with cold water after leaving the lemon and honey mixture for maximum five minutes.</Text>
        </View>
        {/*Eight Screen*/}
        <View style={styles.slide}>
          <Text style={styles.header}>Squeeze out coconut milk from a grated raw coconut. Apply this milk all over your face, including lips.</Text>
          <Text style={styles.text}>Wash your face after 20 minutes.</Text>
        </View>
        {/*Nine Screen*/}
        <View style={styles.slide}>
          <Text style={styles.header}>Take a piece of cotton ball and dip it in un-boiled milk.</Text>
          <Text style={styles.text}>Wipe your tired face with it for instant freshness.</Text>
        </View>
        {/*Ten Screen*/}
        <View style={styles.slide}>
          <Text style={styles.header}>Apply a few drops of pure castor oil on your face and massage it well.</Text>
          <Text style={styles.text}>Leave it for half an hour or so, and then wipe with a wet cloth.</Text>
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

AppRegistry.registerComponent("Fair_Skin", () => Fair_Skin);
