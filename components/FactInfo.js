import React, { Component } from 'react';

import { StyleSheet, View, Text, Image,FlatList } from 'react-native';

export default class FactInfo extends Component {
    render() {
        const { navigation } = this.props;
        const numFbs = navigation.getParam('numFbs');
        const client = navigation.getParam('client');
        const montantTtcFbs = navigation.getParam('montantTtcFbs','0');
        const montantHtFbs = navigation.getParam('montantHtFbs','0');
        const montantTvaFbs = navigation.getParam('montantTvaFbs','0');
        const tauxTva = navigation.getParam('tauxTva');
        const imputation = navigation.getParam('imputation');
        const activity = navigation.getParam('activity');

        
        return (
            <View style={styles.container}>
                <Image style={styles.imageheader} source={require('./../img/first1.png')}></Image>
                <Text style={styles.header} >INFORMATION FACTURE</Text>
                <View style={styles.textL}>
                    <Text style={styles.text}>numFbs: {JSON.stringify(numFbs)} </Text>
                    <Text style={styles.text}>client: {JSON.stringify(client)} </Text>
                    <Text style={styles.text}>montantTtcFbs: {JSON.stringify(montantTtcFbs)} </Text>
                    <Text style={styles.text}>montantHtFbs: {JSON.stringify(montantHtFbs)} </Text>
                    <Text style={styles.text}>montantTvaFbs: {JSON.stringify(montantTvaFbs)} </Text>
                    <Text style={styles.text}> tauxTva: {JSON.stringify(tauxTva)} </Text>
                    <Text style={styles.text}>imputation: {JSON.stringify(imputation)} </Text>
                    <Text style={styles.text}>activity: {JSON.stringify(activity)} </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,  
        //backgroundColor: '#03224c',
        marginTop:10,
        alignItems: 'center',
        justifyContent: 'center',
    },
     imageheader: {
        alignItems: 'center',
        //flex: 1,
         width: 186,
        height: 70,
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
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,


    },
    textL: {
        borderWidth: 2,
        borderColor: '#004A99',
        borderRadius: 5,
        marginBottom: 5,
    },
    text:{
        fontSize: 20,
         margin: 6
    }
});