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
import Card_one from "../Card_one.js";
import Heat from "../Skin/Heat.js";
import Warts from "../Skin/Warts.js";
import Stretch_Marks from "../Skin/Stretch_Marks.js";
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

      <TouchableOpacity onPress={() => this.props.navigation.navigate("Heat")} style={styles.cardImages}>
      <View style={styles.category}>
          <View style={{backgroundColor:'#3F51B5',flex:1,width:'100%',alignItems:'center',justifyContent:'center'}}>

          <View style={{border:1,
            borderWidth: 2,
            borderColor: '#FFFFFF',
            alignItems:'center',
            padding:10}}>
          <Text style={{fontSize:30,color:'#ffffff'}}>Heat</Text>
          </View>
          </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => this.props.navigation.navigate("Stretch_Marks")} style={styles.cardImages}>
      <View style={styles.category}>
          <View style={{backgroundColor:'#03A9F4',flex:1,width:'100%',alignItems:'center',justifyContent:'center'}}>

          <View style={{border:1,
            borderWidth: 2,
            borderColor: '#FFFFFF',
            alignItems:'center',
            padding:10}}>
          <Text style={{fontSize:30,color:'#ffffff'}}>Stretch Marks</Text>
          </View>
          </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => this.props.navigation.navigate("Warts")} style={styles.cardImages}>
      <View style={styles.category}>
          <View style={{backgroundColor:'#009688',flex:1,width:'100%',alignItems:'center',justifyContent:'center'}}>

          <View style={{border:1,
            borderWidth: 2,
            borderColor: '#FFFFFF',
            alignItems:'center',
            padding:10}}>
          <Text style={{fontSize:30,color:'#ffffff'}}>Warts</Text>
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
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
      },
      ScrollView:{
        width:'100%'
      }
    });

    const App = StackNavigator({
      Skin: { screen: Skin }
    });

    AppRegistry.registerComponent("Skin", () => Skin);
