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
  Alert,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";
import { CardViewWithImage } from 'react-native-simple-card-view';
import { StackNavigator } from "react-navigation";
import DryAndRoughHands from "../Arms&Feet/DryAndRoughHands.js";
import Nails from "../Arms&Feet/Nails.js";
import Tan_Removal from "../Arms&Feet/Tan_Removal.js";
import Underarms from "../Arms&Feet/Underarms.js";
export default class ArmsAndFeet extends Component {

  //to disable Status Bar
  componentDidMount() {
    StatusBar.setHidden(true);
  }
  //To disable Toolbar
  static navigationOptions = {
    header: null ,
  };

  render() {
    const { navigate } = this.props.navigation;
    return(
      <ScrollView style = {styles.ScrollView}>
      <View  style={styles.container}>

      <TouchableOpacity onPress={() => this.props.navigation.navigate("Underarms")} style={styles.cardImages}>
      <View style={styles.category}>
          <View style={{backgroundColor:'#3F51B5',flex:1,width:'100%',alignItems:'center',justifyContent:'center'}}>

          <View style={{border:1,
            borderWidth: 2,
            borderColor: '#FFFFFF',
            alignItems:'center',
            padding:10}}>
          <Text style={{fontSize:30,color:'#ffffff'}}>Dark Underarms</Text>
          </View>
          </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => this.props.navigation.navigate("DryAndRoughHands")} style={styles.cardImages}>
      <View style={styles.category}>
          <View style={{backgroundColor:'#03A9F4',flex:1,width:'100%',alignItems:'center',justifyContent:'center'}}>

          <View style={{border:1,
            borderWidth: 2,
            borderColor: '#FFFFFF',
            alignItems:'center',
            padding:10}}>
          <Text style={{fontSize:30,color:'#ffffff'}}>Dry and Rough Hands</Text>
          </View>
          </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => this.props.navigation.navigate("Tan_Removal")} style={styles.cardImages}>
      <View style={styles.category}>
          <View style={{backgroundColor:'#009688',flex:1,width:'100%',alignItems:'center',justifyContent:'center'}}>

          <View style={{border:1,
            borderWidth: 2,
            borderColor: '#FFFFFF',
            alignItems:'center',
            padding:10}}>
          <Text style={{fontSize:30,color:'#ffffff'}}>Tan Removal</Text>
          </View>
          </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => this.props.navigation.navigate("Nails")} style={styles.cardImages}>
      <View style={styles.category}>
          <View style={{backgroundColor:'#8BC34A',flex:1,width:'100%',alignItems:'center',justifyContent:'center'}}>

          <View style={{border:1,
            borderWidth: 2,
            borderColor: '#FFFFFF',
            alignItems:'center',
            padding:10}}>
          <Text style={{fontSize:30,color:'#ffffff'}}>Nails</Text>
          </View>
          </View>
      </View>
      </TouchableOpacity>
          </View>

          </ScrollView>
        );

      }
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        width:'100%',
        height:'100%',
        alignItems: 'center',
        backgroundColor: '#b89baf',
        flexDirection: 'column',
      },
      category:{
        flex:1,
        width:'100%',
        height:150,
        justifyContent:'center',
        alignItems: 'center',
      },
      subContainer: {
        alignItems: 'center',
        flexWrap: 'wrap',
        backgroundColor: '#b89baf',
        flexDirection: 'row',
      },
      headerImage:{
        width: '100%',
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
        flex:0.4,
        backgroundColor: 'rgba(0,0,0,.6)'
      },
      cardImages:{
        width: '100%',
        height: 180,
        alignItems: 'center',
        justifyContent: 'center',
      },
      ScrollView:{
        width:'100%'
      }
    });

    const App = StackNavigator({
      ArmsAndFeet: { screen: ArmsAndFeet }
    });

    AppRegistry.registerComponent("ArmsAndFeet", () => ArmsAndFeet);
