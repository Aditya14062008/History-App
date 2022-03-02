import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import BookOneScreen from "./screens/BookOne";
import BookTwoScreen from "./screens/BookTwo";
import HomeScreen  from "./screens/Home";

export default class App extends React.Component {
   render(){
        return(
           <View>
           <AppContainer/>
           </View>
        );
      }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  BookOneScreen:BookOneScreen,
  BookTwoScreen:BookTwoScreen,
});

const AppContainer = createAppContainer(AppNavigator);

