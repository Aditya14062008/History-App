import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class HomeScreen extends React.Component{
  goToBookOneScreen = (bookcolor) => {
    this.props.navigation.navigate('BookOneScreen', { color: bookcolor });
}

  goToBookTwoScreen = (book1color) => {
    this.props.navigation.navigate('BookTwoScreen', { color: book1color });
}
render(){
  return(
    <View>
    <AppHeader/>
    

    <TouchableOpacity
    style={[styles.button, {backgroundColor:"red"}]}
    onPress={()=>{
       this.goToBookOneScreen('red');
    }}>
    <Text style={styles.buttontext}>The Great Wall Of China</Text>
    </TouchableOpacity>

    <TouchableOpacity
    style={[styles.button, {backgroundColor:"orange"}]}
    onPress={()=>{
       this.goToBookTwoScreen('orange');
    }}>
    <Text style={styles.buttontext}>Taj Mahal</Text>
    </TouchableOpacity>
    </View>
  );
 }
}

const styles = StyleSheet.create({
  button:{
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 5,
    borderRadius: 15,
    marginTop: 20,
    width: 400,
    height: 50,
  },
  buttontext:{
    textAlign:"center",
    color:"black",  
    },
});