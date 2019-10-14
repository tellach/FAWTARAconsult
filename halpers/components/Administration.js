import React from 'react';
import { StyleSheet, Text, View, ImageBackground, FlatList, Image, TouchableOpacity, AsyncStorage } from 'react-native';
export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.idClient = "" 
        this.nomprenom = ""
        this.adrClt = ""
        this.nrcClt = ""
        this.telephoneClt = ""
        this.token= ""
    }
    _getinfo() {    
 
    }

    _deconnexion() {
        //this.props.navigation.navigate('Screen1')
    }
    render() {
        const { navigation } = this.props;
        this.idClient = navigation.getParam('id');
        this.nomprenom = navigation.getParam('reponse').nomprenom
        this.adrClt = navigation.getParam('reponse').adrClt
        this.nrcClt = navigation.getParam('reponse').nrcClt
        this.telephoneClt = navigation.getParam('reponse').telephoneClt
        this.token = navigation.getParam('token')
        const item = {
            'id': this.idClient,
            'token':this.token
        }
        return (
            <View style={styles.container} onLayout={() => this._getinfo()}>

                <View style={styles.containerIm}>
                    <Image
                        style={styles.image}
                        source={require('./../img/profil.png')}
                    />
                    <Text style={styles.text}>Paramètres généraux du compte </Text>
                    <Text style={styles.text1}>Raison sociale : {this.nomprenom} </Text>
                    <Text style={styles.text1}>Adresse : {this.adrClt} </Text>
                    <Text style={styles.text1}>Nom d'utilisateur : {this.idClient} </Text>
                    <Text style={styles.text1}>N° RC : {this.nrcClt} </Text>
                    <Text style={styles.text1}>Télephone :{this.telephoneClt} </Text>

                </View>
                <View style={styles.container2}>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Screen6',item)}  >
                        <Text style={styles.btntext1}>Modifier mot de passe</Text>   
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button2} onPress={() => this._deconnexion()}>
                        <Text style={styles.btntext2} >Déconnexion</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#03224c',
        //alignItems: 'center',
        //justifyContent: 'center',
        backgroundColor: '#f5f5f0'
    },
    image: {
        alignItems: 'center',
        width: 100,
        height: 100,
        marginTop:20,
        //borderRadius: 100,
    },
    containerIm: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderBottomStartRadius: 100,
        marginTop: 0,
        marginRight: 0,
        marginLeft: 0,
        borderWidth:1,
        borderColor: '#004A99'


    },
    text: {
        fontSize: 22,
        textAlign: 'center',
        alignItems: 'center',
        color: 'black',
        paddingBottom: 10,
        marginBottom: 0,
        borderBottomColor: '#004A99',
        borderBottomWidth: 1,
        fontWeight: 'bold',
        marginTop: 30

    },
    text1: {
        fontSize: 16,
        textAlign: 'center',
        alignItems: 'center',
        color: 'black',
        paddingBottom: 10,
        marginBottom: 0,
        borderBottomColor: '#199187',
        borderBottomWidth: 1,
        fontWeight: 'bold',
        marginTop: 1

    },
    button: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#004A99',
        marginTop: 10,
        borderRadius: 10,

    },
    button2:{
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
        marginTop: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#004A99'
    },
    btntext1: {
        color: '#fff',
        fontWeight: 'bold',
    },
    btntext2: {
        color: '#004A99',
        fontWeight: 'bold',
    },
    container2: {
        //alignItems: 'center',
        //justifyContent: 'center',
        marginTop:30,
        margin: 60
    }
});
