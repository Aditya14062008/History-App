import * as React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import AppHeader from '../components/AppHeader'

export default class HomeScreen extends React.Component{
  render(){
    return(
      <View>
      <AppHeader/>
      <Text style={styles.second}>China</Text>
      </View>
    )
  }
}

const styles= StyleSheet.create({
     second:{
    fontSize:40,
    fontWeight:"bold",
    color:"black",
    textAlign:"center",
    marginTop:150,
  }
});