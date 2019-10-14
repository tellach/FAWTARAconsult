import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
//import { Icon } from 'react-native-elements';
import { createStackNavigator, createAppContainer, KeyboardAvoidingView, ScrollView,SafeAreaView } from 'react-navigation';
import Home1 from './components/Home1'
import Regform from './regform'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.username = ""
        this.password = ""
    }
    _connexion() {

        if (this.username.length > 0 && this.password.length > 0) {
            fetch('http://192.168.43.213:35839/Facturation/api/production/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: this.username,
                    password: this.password,
                }),
            }).then(response => {

                let reponse1 = JSON.stringify(response._bodyText)
                if (reponse1 === '"failed"') {
                    alert('user ou mot de passe incorrect')
                }
                else {
                    const item = {
                        'id': this.username
                    }
                    this.props.navigation.navigate('Screen2', item)
                }

            }).catch((error) => {
                console.log("Api call error");
                alert(error.message);
            });
            // this.props.navigation.navigate('Screen2')
        }
    }
    _usernameChanged(text) {
        this.username = text
    }
    _passwordChanged(text) {
        this.password = text
    }
    render() {
        return (
            
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('./img/first1.png')}></Image>
                    <Text style={styles.title}>connexion</Text>
                </View>
                <View style={styles.infoContainer}>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection:'column'

    },
    logoContainer:{
        alignItems:'center',
        justifyContent:'center',
        flex:1
    },
    logo:{
        width:128,
        height:56
    },
    text:{
        color:'#f7c744',
        fontSize:18,
        textAlign:'center',
        marginTop:5,
        opacity:0.9
    }

});


