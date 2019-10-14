import React, { Component } from 'react';

import { StyleSheet, View, Text, Image, FlatList, TextInput, TouchableOpacity} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
export default class FactInfo extends Component {
    constructor(props) {
        super(props)
        this.idClient = ""
        this.state={
            actuel :"",
            nouveau : "",
            confirmer : ""
        }



    }  
   
    _changePw(id) {

        if (this.state.actuel.length > 0 && this.state.nouveau.length > 0 && this.state.confirmer.length>0)
        {
            fetch('http://192.168.1.2:35839/Facturation/api/production/changePassword/' + id, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    actuel: this.state.actuel,
                    nouveau: this.state.nouveau,
                    confirmer: this.state.confirmer,
                }),

            }).then(response => response.json())
                .then(responseJson => {
                    const rep=responseJson;
                    if (rep ==="success")
                    {
                        this.props.navigation.navigate('Screen1')
                    }
                    else{
                        if (rep ==="errorConfirmer")
                        {
                            alert("confirmation non valide");
                        }
                        else{
                            alert("mot de passe actuel non valide")
                        }
                    }
                })
                .catch((error) => {

                    console.log("Api call error");
                    alert(error.message);

                });

        }
        

    }
    
    render() {
        const { navigation } = this.props;
        this.idClient = navigation.getParam('id');
        return (
            <View style={styles.container}>
                <Image style={styles.imageheader} source={require('./../img/first1.png')}></Image>
                <Text style={styles.header} >Changer le mot de passe </Text>
                <View style={styles.viewSection}>
                    <View style={styles.viewSection2}>
                        <Text style={styles.text} >Actuel</Text>
                        <Text style={styles.text} >Nouveau</Text>
                        <Text style={styles.text}>Confirmer</Text>

                    </View>
                    <View style={styles.viewSection2}>
                        <TextInput style={styles.textinput} 
                            secureTextEntry={true}
                            onChangeText={(text) => this.setState({ actuel: text })}>
                        </TextInput>
                        <TextInput style={styles.textinput}
                            returnKeyLabel={"next"}
                            secureTextEntry={true}
                            underlineColorAndroid={'transparent'}
                            onChangeText={(text) => this.setState({ nouveau: text })}>
                        </TextInput>
                        <TextInput style={styles.textinput}
                            returnKeyLabel={"next"}
                            secureTextEntry={true}
                            underlineColorAndroid={'transparent'}
                            onChangeText={(text) => this.setState({ confirmer: text })}>
                        </TextInput>

                    </View>

                </View>
                <TouchableOpacity style={styles.button} onPress={() => this._changePw(this.idClient)}>
                    <Text style={styles.btntext1}>Enregistrer les modifications </Text>
                </TouchableOpacity>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,  
        //backgroundColor: '#03224c',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    imageheader: {
        alignItems: 'center',
        //flex: 1,
        width: 186,
        height: 75,
        alignSelf: "center",
        marginBottom: 12
    },
    header: {
        textAlign: 'center',
        //alignItems: 'center',
        fontSize: 24,
        color: '#004A99',
        paddingBottom: 30,
        // borderBottomColor: '#199187',
        borderBottomWidth: 1,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 5,
        marginRight: 5,


    },
    viewSection:{
        marginTop:35,
        flexDirection:'row',
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',



    },
    viewSection2:{
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        alignItems: 'center',
        fontSize: 17,
        marginRight:8,
        fontWeight: 'bold',
        marginBottom:24,
        marginTop:10
    },
    textinput:{
        alignItems: 'center',
        height: 50,
        width:210,
        color: 'black',
        borderRadius: 10,
        borderWidth:2,
        borderColor: '#004A99',
        backgroundColor: '#f5f5f0',
        marginBottom:5
    },
    button: {
        alignItems: 'center',
        alignSelf: "center",
        backgroundColor: '#004A99',
        marginTop: 10,
        borderRadius: 10,
        height: 50,
        width: 300,
        padding: 15,


    },
    btntext1: {
        color: '#fff',
        fontWeight: 'bold',
    },
});