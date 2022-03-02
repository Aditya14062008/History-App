import * as React from "react";
import {View, Text, TouchableOpacity, StyleSheet, Image} from "react-native";
import AppHeader from '../components/AppHeader';

export default class HomeScreen extends React.Component{
  render(){
    return(
      <View>
      <Text style={styles.second2}>The Taj Mahal</Text>
      <Text style={styles.second}>The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. It was made in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal. It also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 42-acre complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall. 
The Taj Mahal was designated as a UNESCO World Heritage Site in 1983 for being "the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage". It is regarded by many as the best example of Mughal architecture and a symbol of India's rich history. The Taj Mahal attracts more than 6 million visitors a year[3] and in 2007, it was declared a winner of the New 7 Wonders of the World (2000–2007) initiative.
      </Text>
      </View>
    )
  }
}

const styles= StyleSheet.create({
     second:{
    fontSize:20,
    fontWeight:"bold",
    color:"black",
    textAlign:"center",
    marginTop:50,
  },
  second2:{
    fontSize:50,
    fontWeight:"bold",
    color:"black",
    textAlign:"center",
    marginTop:20,
  },
  button:{
    alignItems:"center",
    marginTop:15,
  }

});