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
import Split_Ends from "../Hair/Split_Ends.js";
import Dandruff from "../Hair/Dandruff.js";
import Grey_Hair from "../Hair/Grey_Hair.js";
import Hair_Conditioning from "../Hair/Hair_Conditioning.js";
import Hair_Loss from "../Hair/Hair_Loss.js";
import { StackNavigator } from "react-navigation";
export default class Hair extends Component {

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

      <TouchableOpacity onPress={() => this.props.navigation.navigate("Split_Ends")} style={styles.cardImages}>
      <View style={styles.category}>
          <View style={{flex:1,width:'100%',alignItems:'center',justifyContent:'center'}}>

          <View style={{border:1,
            borderWidth: 2,
            borderColor: '#FFFFFF',
            alignItems:'center',
            padding:10}}>
          <Text style={{fontSize:30,color:'#ffffff'}}>Split Ends</Text>
          </View>
          </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => this.props.navigation.navigate("Dandruff")} style={styles.cardImages}>
      <View style={styles.category}>
          <View style={{flex:1,width:'100%',alignItems:'center',justifyContent:'center'}}>

          <View style={{border:1,
            borderWidth: 2,
            borderColor: '#FFFFFF',
            alignItems:'center',
            padding:10}}>
          <Text style={{fontSize:30,color:'#ffffff'}}>Dandruff</Text>
          </View>
          </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => this.props.navigation.navigate("Grey_Hair")} style={styles.cardImages}>
      <View style={styles.category}>
          <View style={{flex:1,width:'100%',alignItems:'center',justifyContent:'center'}}>

          <View style={{border:1,
            borderWidth: 2,
            borderColor: '#FFFFFF',
            alignItems:'center',
            padding:10}}>
          <Text style={{fontSize:30,color:'#ffffff'}}>Grey Hair</Text>
          </View>
          </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => this.props.navigation.navigate("Hair_Conditioning")} style={styles.cardImages}>
      <View style={styles.category}>
          <View style={{flex:1,width:'100%',alignItems:'center',justifyContent:'center'}}>

          <View style={{border:1,
            borderWidth: 2,
            borderColor: '#FFFFFF',
            alignItems:'center',
            padding:10}}>
          <Text style={{fontSize:30,color:'#ffffff'}}>Hair Conditioning</Text>
          </View>
          </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => this.props.navigation.navigate("Hair_Loss")} style={styles.cardImages}>
      <View style={styles.category}>
          <View style={{flex:1,width:'100%',alignItems:'center',justifyContent:'center'}}>

          <View style={{border:1,
            borderWidth: 2,
            borderColor: '#FFFFFF',
            alignItems:'center',
            padding:10}}>
          <Text style={{fontSize:30,color:'#ffffff'}}>Hair Loss</Text>
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
        height: 180,
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
      Hair: { screen: Hair },
      Card_one: { screen: Card_one }
    });

    AppRegistry.registerComponent("Hair", () => Hair);
