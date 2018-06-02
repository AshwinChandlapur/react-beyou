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
import { CardViewWithImage } from 'react-native-simple-card-view'
import Card_one from "./Card_one";
import Face from "./Face";
import Boiler from "./Boiler";
import { StackNavigator } from "react-navigation";
export default class Main extends Component {

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
      source={require('./yellow_back.jpg')}
      style={styles.headerImage}>

      <View style={{backgroundColor: 'rgba(0,0,0,.6)',
      alignItems:'center',
      justifyContent:'center'}}>

      <View style={{border:1,
        borderWidth: 2,
        borderColor: '#FFFFFF',
        alignItems:'center',
        padding:10}}>

        <View style={{flexDirection:'row',alignItems: 'center'}}>
        <Image source={require('./logo.png')}
        style={{width: 72, height: 72}} />
        <Text style={{ color: '#fff', fontSize: 48,fontFamily:'sans-serif-condensed' }}>
        Be You
        </Text>
        </View>

        <Text style={{ color: '#fff', fontSize: 24, fontStyle:'italic',fontFamily:'sans-serif-thin'}}>
        Real You.The Best You.
        </Text>
        </View>
        </View>


        </ImageBackground>


        <TouchableOpacity onPress={() => this.props.navigation.navigate("Face")} style={styles.cardImages}>
        <ImageBackground
        source={require('./card1.jpg')}
        style={styles.cardImages}>
        <View style={{backgroundColor: 'rgba(0,0,0,.6)',
        alignItems:'center',
        justifyContent:'center'}}>

        <View style={{border:1,
          borderWidth: 2,
          borderColor: '#FFFFFF',
          alignItems:'center',
          padding:5}}>
          <Text style={{ color: '#fff', fontSize: 48,fontFamily:'sans-serif-condensed' }}>
          Face
          </Text>

          </View>
          </View>

          </ImageBackground>
          </TouchableOpacity>


          <TouchableOpacity onPress={() => this.props.navigation.navigate("Card_one")} style={styles.cardImages}>
          <ImageBackground
          source={require('./card2.jpg')}
          style={styles.cardImages}>
          <View style={{backgroundColor: 'rgba(0,0,0,.6)',
          alignItems:'center',
          justifyContent:'center'}}>

          <View style={{border:1,
            borderWidth: 2,
            borderColor: '#FFFFFF',
            alignItems:'center',
            padding:5}}>
            <Text style={{ color: '#fff', fontSize: 48,fontFamily:'sans-serif-condensed' }}>
            Arms & Feet
            </Text>

            </View>
            </View>

            </ImageBackground>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => this.props.navigation.navigate("Card_one")} style={styles.cardImages}>
            <ImageBackground
            source={require('./card3.jpg')}
            style={styles.cardImages}>
            <View style={{backgroundColor: 'rgba(0,0,0,.6)',
            alignItems:'center',
            justifyContent:'center'}}>

            <View style={{border:1,
              borderWidth: 2,
              borderColor: '#FFFFFF',
              alignItems:'center',
              padding:5}}>
              <Text style={{ color: '#fff', fontSize: 48,fontFamily:'sans-serif-condensed' }}>
              Hair
              </Text>

              </View>
              </View>

              </ImageBackground>
              </TouchableOpacity>


              <TouchableOpacity onPress={() => this.props.navigation.navigate("Card_one")} style={styles.cardImages}>
              <ImageBackground
              source={require('./card4.jpg')}
              style={styles.cardImages}>
              <View style={{backgroundColor: 'rgba(0,0,0,.6)',
              alignItems:'center',
              justifyContent:'center'}}>

              <View style={{border:1,
                borderWidth: 2,
                borderColor: '#FFFFFF',
                alignItems:'center',
                padding:5}}>
                <Text style={{ color: '#fff', fontSize: 48,fontFamily:'sans-serif-condensed' }}>
                Skin
                </Text>

                </View>
                </View>

                </ImageBackground>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => this.props.navigation.navigate("Card_one")} style={styles.cardImages}>
                <ImageBackground
                source={require('./card5.jpg')}
                style={styles.cardImages}>
                <View style={{backgroundColor: 'rgba(0,0,0,.6)',
                alignItems:'center',
                justifyContent:'center'}}>

                <View style={{border:1,
                  borderWidth: 2,
                  borderColor: '#FFFFFF',
                  alignItems:'center',
                  padding:5}}>
                  <Text style={{ color: '#fff', fontSize: 48,fontFamily:'sans-serif-condensed' }}>
                  Eyes
                  </Text>

                  </View>
                  </View>

                  </ImageBackground>
                  </TouchableOpacity>





            {/*
              <View style={styles.subContainer}>
              <CardViewWithImage
              width={170}
              source={ {uri: 'https://placeimg.com/640/480/nature'} }
              title={ 'Face' }
              onPress={() => this.props.navigation.navigate("Card_one")}
              imageWidth={ '100%' }
              imageHeight={ 100 }
              roundedImage={ false }
              />

              <CardViewWithImage
              width={170}
              source={ {uri: 'https://placeimg.com/640/480/nature'} }
              title={ 'Skin' }
              imageWidth={ '100%' }
              imageHeight={ 100 }
              roundedImage={ false }
              />
              </View>
              <View style={styles.subContainer}>
              <CardViewWithImage
              width={170}
              source={ {uri: 'https://placeimg.com/640/480/nature'} }
              title={ 'Face' }
              onPress={() => this.props.navigation.navigate("Card_one")}
              imageWidth={ '100%' }
              imageHeight={ 100 }
              roundedImage={ false }
              />

              <CardViewWithImage
              width={170}
              source={ {uri: 'https://placeimg.com/640/480/nature'} }
              title={ 'Skin' }
              imageWidth={ '100%' }
              imageHeight={ 100 }
              roundedImage={ false }
              />
              </View>
              <View style={styles.subContainer}>
              <CardViewWithImage
              width={170}
              source={ {uri: 'https://placeimg.com/640/480/nature'} }
              title={ 'Face' }
              onPress={() => this.props.navigation.navigate("Card_one")}
              imageWidth={ '100%' }
              imageHeight={ 100 }
              roundedImage={ false }
              />

              <CardViewWithImage
              width={170}
              source={ {uri: 'https://placeimg.com/640/480/nature'} }
              title={ 'Skin' }
              imageWidth={ '100%' }
              imageHeight={ 100 }
              roundedImage={ false }
              />
              </View>
            */}

          </View>

          </ScrollView>
        );

      }
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#b89baf',
        flexDirection: 'column',
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
      Main: { screen: Main },
      Card_one: { screen: Card_one },
      Face: { screen: Face },
      Boiler:{screen:Boiler}
    });

    AppRegistry.registerComponent("Main", () => Main);
