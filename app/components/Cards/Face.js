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
import Fair_Skin from "../Face/Fair_Skin.js";
import Dark_Lips from "../Face/Dark_Lips.js";
import Acne from "../Face/Acne.js";
import BlackHeads from "../Face/BlackHeads.js";
import Blemishes from "../Face/Blemishes.js";
import Face_Cleanser from "../Face/Face_Cleanser.js";
import Face_Scrub from "../Face/Face_Scrub.js";
import Teeth_Whitening from "../Face/Teeth_Whitening.js";
import Card_one from "../Card_one.js";
import { StackNavigator } from "react-navigation";
export default class Face extends Component {

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

      <TouchableOpacity onPress={() => this.props.navigation.navigate("Fair_Skin")} style={styles.cardImages}>
      <View style={styles.category}>
          <View style={{backgroundColor:'#3F51B5',flex:1,width:'100%',alignItems:'center',justifyContent:'center'}}>

          <View style={{border:1,
            borderWidth: 2,
            borderColor: '#FFFFFF',
            alignItems:'center',
            padding:10}}>
          <Text style={{fontSize:30,color:'#ffffff'}}>Fair Skin</Text>
          </View>
          </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => this.props.navigation.navigate("Dark_Lips")} style={styles.cardImages}>
      <View style={styles.category}>
          <View style={{backgroundColor:'#03A9F4',flex:1,width:'100%',alignItems:'center',justifyContent:'center'}}>

          <View style={{border:1,
            borderWidth: 2,
            borderColor: '#FFFFFF',
            alignItems:'center',
            padding:10}}>
          <Text style={{fontSize:30,color:'#ffffff'}}>Lighten Dark Lips</Text>
          </View>
          </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => this.props.navigation.navigate("BlackHeads")} style={styles.cardImages}>
      <View style={styles.category}>
          <View style={{backgroundColor:'#009688',flex:1,width:'100%',alignItems:'center',justifyContent:'center'}}>

          <View style={{border:1,
            borderWidth: 2,
            borderColor: '#FFFFFF',
            alignItems:'center',
            padding:10}}>
          <Text style={{fontSize:30,color:'#ffffff'}}>Blackheads</Text>
          </View>
          </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => this.props.navigation.navigate("Face_Cleanser")} style={styles.cardImages}>
      <View style={styles.category}>
          <View style={{backgroundColor:'#8BC34A',flex:1,width:'100%',alignItems:'center',justifyContent:'center'}}>

          <View style={{border:1,
            borderWidth: 2,
            borderColor: '#FFFFFF',
            alignItems:'center',
            padding:10}}>
          <Text style={{fontSize:30,color:'#ffffff'}}>Face Cleanser</Text>
          </View>
          </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => this.props.navigation.navigate("Blemishes")} style={styles.cardImages}>
      <View style={styles.category}>
          <View style={{backgroundColor:'#FFEB3B',flex:1,width:'100%',alignItems:'center',justifyContent:'center'}}>

          <View style={{border:1,
            borderWidth: 2,
            borderColor: '#FFFFFF',
            alignItems:'center',
            padding:10}}>
          <Text style={{fontSize:30,color:'#ffffff'}}>Blemishes</Text>
          </View>
          </View>
      </View>
      </TouchableOpacity>


      <TouchableOpacity onPress={() => this.props.navigation.navigate("Face_Scrub")} style={styles.cardImages}>
      <View style={styles.category}>
          <View style={{backgroundColor:'#FF9800',flex:1,width:'100%',alignItems:'center',justifyContent:'center'}}>

          <View style={{border:1,
            borderWidth: 2,
            borderColor: '#FFFFFF',
            alignItems:'center',
            padding:10}}>
          <Text style={{fontSize:30,color:'#ffffff'}}>Face Scrub</Text>
          </View>
          </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => this.props.navigation.navigate("Acne")} style={styles.cardImages}>
      <View style={styles.category}>
          <View style={{backgroundColor:'#795548',flex:1,width:'100%',alignItems:'center',justifyContent:'center'}}>

          <View style={{border:1,
            borderWidth: 2,
            borderColor: '#FFFFFF',
            alignItems:'center',
            padding:10}}>
          <Text style={{fontSize:30,color:'#ffffff'}}>Acne</Text>
          </View>
          </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => this.props.navigation.navigate("Teeth_Whitening")} style={styles.cardImages}>
      <View style={styles.category}>
          <View style={{backgroundColor:'#607D8B',flex:1,width:'100%',alignItems:'center',justifyContent:'center'}}>

          <View style={{border:1,
            borderWidth: 2,
            borderColor: '#FFFFFF',
            alignItems:'center',
            padding:10}}>
          <Text style={{fontSize:30,color:'#ffffff'}}>Teeth Whitening</Text>
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
      Face: { screen: Face },
      Card_one: { screen: Card_one },
    });

    AppRegistry.registerComponent("Face", () => Face);
