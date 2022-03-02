import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>History App</Text>
        <Text style={styles.text2}>Tells you about the history of monuments</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'silver',
  },
  text:{
    color: 'gray',
    padding: 20,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text2:{
    color: 'black',
    padding: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default AppHeader;