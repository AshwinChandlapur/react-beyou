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
export default class Split_Ends extends Component {
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
          <Text style={styles.header}>Take ½ cup of black lentil and grind it to get a smooth powder.

Add a spoon full of fenugreek seeds.

Now, mix this with a cup of yogurt.

</Text>
          <Text style={styles.text}>Apply this to your hair for two hours and wash off with a mild shampoo afterwards.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>To constrain split ends and frizzed hair, give your hair a rinse of chamomile tea.

Steep a few chamomile tea bags in boiling water.

Let it cool.</Text>
          <Text style={styles.text}>

          Rinse your hair with this solution to liberate your hair from split ends.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Coconut oil is again a great oil therapy to combat with almost all the hair problems.</Text>
          <Text style={styles.text}>Massage your hair with warm coconut oil to treat split ends, dullness, and hair fall.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Give your hair a relaxing and effective spa with warm olive oil.</Text>
          <Text style={styles.text}>Massage your hair gently with olive oil.

          You can either keep it overnight or wash it after an hour.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Mash an avocado and massage it in your damp hair, coating the split ends.</Text>
          <Text style={styles.text}>Rinse it out after thirty minutes.

          If required, some olive oil can also be used into it.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Beer is actually good for your hair and is considered as a great conditioner.

Rinse your hair with beer after shampooing them and you will be really amazed to see the shine and gleam into your hair.</Text>
          <Text style={styles.text}>
          Rinsing your hair every time with beer, whenever you shampoo, will help your hair in trouncing the problem of split ends.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Honey is a great treatment for split ends.

Mix a spoon full of honey and some curd.

Give a massage to your hair with this mix, especially at the hair ends.
</Text>
          <Text style={styles.text}>
          Let this mixture stay on your strands for 20 minutes and rinse it out afterwards.

          This mixture will not only relieve you from split ends, but will also confer your hair with a gorgeous lustre</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Mix a tbsp of cream with half cup of milk.

Whisk it thoroughly.
</Text>
          <Text style={styles.text}>
          Apply this mixture to your hair for 15 minutes and wash it out.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Massage your hair with castor oil, mixed with mustard and olive oil, to get split ends free hair.

Keep it for 30 minutes, and wrap with a towel or shower cap.
</Text>
          <Text style={styles.text}>
          Afterwards, rinse it off with shampoo.</Text>
        </View>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Take a ripe papaya and half cup of yogurt.

Blend them to get a pulpy paste.

</Text>
          <Text style={styles.text}>You can apply this as a hair mask for about 30 minutes and wash off.

          This will give your hair sheen and solace from split ends.</Text>
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

AppRegistry.registerComponent("Split_Ends", () => Split_Ends);
