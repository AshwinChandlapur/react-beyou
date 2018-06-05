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
export default class Hair_Loss extends Component {
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
          <Text style={styles.header}>Apply coconut milk to your scalp using a hair dye brush.

Then cover your head with a towel and leave it on for about 20 minutes.

You can ideally prepare coconut milk at home by grinding the grated coconut and squeezing its milk.
</Text>
          <Text style={styles.text}>
          After that, remove the towel and rinse your hair with cold water.

          Follow up with shampoo.

          You can follow this process once in a week.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Boil the neem leaves in water till the water level comes down to half its quantity.

Wait for the mixture to cool.

Rinse your hair with this mixture.
</Text>
          <Text style={styles.text}>
          You can use this remedy as a last rinse after shampooing your hair.

          It can ideally be done once every week.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Boil the dried Indian gooseberries in coconut oil till the oil turns black.

Wait for it to cool, and then massage your scalp with this oil.
</Text>
          <Text style={styles.text}>
          Leave it on for about 20 minutes, and then shampoo as usual.

          You can follow this twice a week.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Add the ground licorice root and saffron to the cup of milk and mix thoroughly.

Before going to bed in the night, apply this mixture to the bald patches and leave it on overnight.
</Text>
          <Text style={styles.text}>
          Wash your hair the next morning.

          Do this twice a week.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Add the Chinese hibiscus flowers to the coconut oil and heat the mixture.

When the flowers are charred, strain the mixture and collect the oil.
</Text>
          <Text style={styles.text}>
          Apply this oil every night and wash your hair thoroughly the next morning.

          You can try this remedy two to three times every week for about a month.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Grind the coriander leaves and mix them with water to form a paste.

Extract the juice from the paste, and using a hair dye brush, apply it to your scalp and hair.

Leave it on for an hour, and then shampoo as usual.
</Text>
          <Text style={styles.text}>
          In the morning, before taking a bath.

          You can try this out twice or thrice a week.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Make a paste out of equal parts of Aloe Vera, Indian Gooseberry, Shikakai, And Neem Powder.

Apply the combination twice a week on your hair and scalp and wash off with lukewarm water.
</Text>
          <Text style={styles.text}>
          For best results, use this pack twice a month.</Text>
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

AppRegistry.registerComponent("Hair_Loss", () => Hair_Loss);
