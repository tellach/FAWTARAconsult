import React from 'react';
import { StyleSheet, Text, View, ImageBackground,FlatList} from 'react-native';
import Login from './login'
import Home1 from './components/Home1'
import Navigation1 from './navigations/Navigation1'
import { createDrawerNavigator, createAppContainer} from 'react-navigation'
import FirstScreen from './components/FirstScreen'
export default class App extends React.Component {
  render() {
    return (

      <FirstScreen/>

    ); 
  }
}


const styles = StyleSheet.create({
  container: {
    //flex: 1,  
    //backgroundColor: '#03224c',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
