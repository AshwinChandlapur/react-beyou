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
import Face from "./Cards/Face";
import Hair from "./Cards/Hair";
import Skin from "./Cards/Skin";
import Eyes from "./Cards/Eyes";
import ArmsAndFeet from "./Cards/ArmsAndFeet";
import Boiler from "./Boiler";
import { StackNavigator } from "react-navigation";
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
const quote1 = "Beauty has so many forms, and the most beautiful thing is confidence and loving yourself.";
const quote2 = "The future belongs to those who believe in the beauty of their dreams.";
const quote3 = "Beauty is power; a smile is its sword.";
const quote4 = "Fashion is architecture: it is a matter of proportions";
const quote5 = "Let your soul stand cool and composed before a million universes.";
const quote6 = "Life isn't about finding yourself. Life is about creating yourself.";
const quote7 = "Beauty is being comfortable and confident in your own skin.";
const quote_string="";
switch (getRandomInt(7)) {
  case 0:
    quote_string = quote1;
    break;
    case 1:
    quote_string = quote2;
      break;
      case 2:
      quote_string = quote3;
        break;
        case 3:
        quote_string = quote4;
          break;
          case 4:
          quote_string = quote5;
            break;
            case 5:
            quote_string = quote6;
              break;
              case 6:
              quote_string = quote7;
                break;
  default:
        quote_string = quote7;
}
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
      source={require('./imgs/yellow_back.jpg')}
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
        {/*}<Image source={require('/Users/ashwinchandlapur/Desktop/React-Native Projects/React-BeYou/android/app/src/main/res/drawable-hdpi/logo.png')}
        style={{width: 72, height: 72}} />*/}
        <Image source={require('./imgs/logo.png')}
        style={{width: 72, height: 72}} />
        <Text style={{ color: '#fff', fontSize: 48,fontFamily:'sans-serif-condensed' }}>
        Be You
        </Text>
        </View>
        <Text style={{ color: '#fff', fontSize: 18, fontStyle:'italic',fontFamily:'sans-serif-thin',textAlign:'center'}}>
        {quote_string}
        </Text>
        </View>
        </View>


        </ImageBackground>


        <TouchableOpacity onPress={() => this.props.navigation.navigate("Face")} style={styles.cardImages}>
        <ImageBackground
        source={require('./imgs/card1.jpg')}
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




            <TouchableOpacity onPress={() => this.props.navigation.navigate("Hair")} style={styles.cardImages}>
            <ImageBackground
            source={require('./imgs/card3.jpg')}
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


              <TouchableOpacity onPress={() => this.props.navigation.navigate("Skin")} style={styles.cardImages}>
              <ImageBackground
              source={require('./imgs/card4.jpg')}
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


                <TouchableOpacity onPress={() => this.props.navigation.navigate("Eyes")} style={styles.cardImages}>
                <ImageBackground
                source={require('./imgs/card5.jpg')}
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


                  <TouchableOpacity onPress={() => this.props.navigation.navigate("ArmsAndFeet")} style={styles.cardImages}>
                  <ImageBackground
                  source={require('./imgs/card2.jpg')}
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
      Hair: { screen: Hair },
      Skin: { screen: Skin },
      Eyes: { screen: Eyes },
      ArmsAndFeet: { screen: ArmsAndFeet },
      Boiler:{screen:Boiler}
    });

    AppRegistry.registerComponent("Main", () => Main);
