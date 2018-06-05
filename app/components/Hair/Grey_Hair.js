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
export default class Grey_Hair extends Component {
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
          <Text style={styles.header}>For treating your grey hair, apply ashwagandha or Indian ginseng on your scalp.</Text>
          <Text style={styles.text}>It helps in increasing the melanin content of the hair.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Guava leaves are also good for turning grey hair black.</Text>
          <Text style={styles.text}>Just grind some guava leaves and apply on your scalp on the regular basis.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Soak 3-4 pods of shikakai (Acacia concinna) and 10-12 soap nut seeds in one jug of water, overnight.</Text>
          <Text style={styles.text}>Boil it and store this in a bottle as a natural shampoo.

          Soak a few pieces of amla separately and boil it to use it as a conditioner.></Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Take an equal amount of rosemary and sage leaves in one cup of water.</Text>
          <Text style={styles.text}>
          Steep and sieve the liquid to use as a natural hair colorant.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>1 gm of black pepper and ½ cup of curd is also a good option for massaging your hair and scalp to curb grey hair.</Text>
          <Text style={styles.text}>
          Lemon juice can also be added to this mixture.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>The juice of onion helps in preventing untimely hair greying, hair loss and baldness.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Boil ribbed gourd in coconut oil till it turns black for 3-4 hours.</Text>
          <Text style={styles.text}>Boil ribbed gourd in coconut oil till it turns black for 3-4 hours.

Massaging the scalp with this oil cures premature greying of hair.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>A mixture of 2 spoons of henna powder, 1 spoon of fenugreek paste, 2 spoons of basil leaves paste, 3 spoons of coffee, 3 spoons of mint juice, and 1 spoon of yogurt is proved to be very effective for treating grey hair.</Text>
          <Text style={styles.text}>
          Apply this mixture regularly to get good results.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Boil some curry leaves in coconut oil till it turns black.</Text>
          <Text style={styles.text}>
          Apply this on your scalp as a hair tonic for treating the problems of hair loss and pigmentation.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Massaging with pure ghee or clarified butter, twice in a week, curbs the problem of grey hair.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Grated ginger mixed with a tablespoon of honey must be taken on a daily basis for preventing hair from turning grey.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Boil some pieces of amla in coconut oil till it turns black and massage your hair with it to cure your grey hair, naturally.</Text>
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

AppRegistry.registerComponent("Grey_Hair", () => Grey_Hair);
