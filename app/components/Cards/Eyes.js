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

import Beautiful_Eyes from "../Eyes/Beautiful_Eyes.js";
import Dark_Circles from "../Eyes/Dark_Circles.js";
import Eyebrows from "../Eyes/Eyebrows.js";
import Puffiness from "../Eyes/Puffiness.js";
import Sunken_Eyes from "../Eyes/Sunken_Eyes.js";
import { StackNavigator } from "react-navigation";
export default class Skin extends Component {

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
      <ImageBackground
      source={require('../imgs/back1.jpg')}
      style={styles.backImage}>

      <TouchableOpacity onPress={() => this.props.navigation.navigate("Dark_Circles")} style={styles.cardImages}>
      <View style={styles.category}>
          <View style={{flex:1,width:'100%',alignItems:'center',justifyContent:'center'}}>

          <View style={{border:1,
            borderWidth: 2,
            borderColor: '#FFFFFF',
            alignItems:'center',
            padding:10}}>
          <Text style={{fontSize:30,color:'#ffffff'}}>Dark Circles</Text>
          </View>
          </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => this.props.navigation.navigate("Sunken_Eyes")} style={styles.cardImages}>
      <View style={styles.category}>
          <View style={{flex:1,width:'100%',alignItems:'center',justifyContent:'center'}}>

          <View style={{border:1,
            borderWidth: 2,
            borderColor: '#FFFFFF',
            alignItems:'center',
            padding:10}}>
          <Text style={{fontSize:30,color:'#ffffff'}}>Sunken Eyes</Text>
          </View>
          </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => this.props.navigation.navigate("Puffiness")} style={styles.cardImages}>
      <View style={styles.category}>
          <View style={{flex:1,width:'100%',alignItems:'center',justifyContent:'center'}}>

          <View style={{border:1,
            borderWidth: 2,
            borderColor: '#FFFFFF',
            alignItems:'center',
            padding:10}}>
          <Text style={{fontSize:30,color:'#ffffff'}}>Puffiness</Text>
          </View>
          </View>
      </View>
      </TouchableOpacity>


      <TouchableOpacity onPress={() => this.props.navigation.navigate("Eyebrows")} style={styles.cardImages}>
      <View style={styles.category}>
          <View style={{flex:1,width:'100%',alignItems:'center',justifyContent:'center'}}>

          <View style={{border:1,
            borderWidth: 2,
            borderColor: '#FFFFFF',
            alignItems:'center',
            padding:10}}>
          <Text style={{fontSize:30,color:'#ffffff'}}>Eyebrows</Text>
          </View>
          </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => this.props.navigation.navigate("Beautiful_Eyes")} style={styles.cardImages}>
      <View style={styles.category}>
          <View style={{flex:1,width:'100%',alignItems:'center',justifyContent:'center'}}>

          <View style={{border:1,
            borderWidth: 2,
            borderColor: '#FFFFFF',
            alignItems:'center',
            padding:10}}>
          <Text style={{fontSize:30,color:'#ffffff'}}>Beautiful Eyes</Text>
          </View>
          </View>
      </View>
      </TouchableOpacity>


      </ImageBackground>



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
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
      },
      backImage:{
        flex:1,
        width:'100%'
      },
      ScrollView:{
        width:'100%'
      }
    });

    const App = StackNavigator({
      Skin: { screen: Skin }
    });

    AppRegistry.registerComponent("Skin", () => Skin);
