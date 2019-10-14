import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.regform}>
        <Text style={styles.header}>Inscription</Text>
        <TextInput style={styles.textinput} placeholder='Nom' placeholderTextColor={'black'} underlineColorAndroid={'transparent'}></TextInput>
        <TextInput style={styles.textinput} placeholder='Prenom' placeholderTextColor={'black'} underlineColorAndroid={'transparent'}></TextInput>
        <TextInput style={styles.textinput} placeholder='Email' placeholderTextColor={'black'} underlineColorAndroid={'transparent'}></TextInput>
        <TextInput style={styles.textinput} placeholder='Password' placeholderTextColor={'black'} underlineColorAndroid={'transparent'} secureTextEntry={true}></TextInput>
        <TextInput style={styles.textinput} placeholder='Phone' placeholderTextColor={'black'} underlineColorAndroid={'transparent'}></TextInput>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.btntext}>Enregister</Text>
        </TouchableOpacity>

      </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  regform: {
    //alignSelf:'stretch',
  },
  header: {
    alignItems: 'center',
    fontSize: 24,
    color: 'black',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
  },
  textinput: {
    height: 40,
    marginBottom: 30,
    color: 'black',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  button: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ff6666',
    marginTop: 30,

  },
  button1: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    marginTop: 5,

  },
  btntext: {
    alignItems: 'center',
    color: 'black',
    fontWeight: 'bold',
    marginLeft:40,
    marginRight:40,
  }
});