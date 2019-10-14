import React, { Component } from 'react';

import { StyleSheet, View, Text, Image, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
export default class FactInfo extends Component {
    constructor(props) {
        super(props)
        }


    render() {

        return (
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={require('./../img/statistique.jpg')}
                />
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

    image: {
        alignItems: 'center',
        //flex: 1,
        width: '100%',
        height: '100%',
        alignSelf: "center",
    },
   
});