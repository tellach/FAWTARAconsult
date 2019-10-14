import React, { Component } from 'react';

import { StyleSheet, View, Text, Image, FlatList } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
export default class FactInfo extends Component {
    constructor(props) {
        super(props);
        const { navigation } = this.props;
        const numFbs = navigation.getParam('numFbs');
        const client = navigation.getParam('client');
        const montantTtcFbs = navigation.getParam('montantTtcFbs', '0');
        const montantHtFbs = navigation.getParam('montantHtFbs', '0');
        const montantTvaFbs = navigation.getParam('montantTvaFbs', '0');
        const tauxTva = navigation.getParam('tauxTva');
        const imputation = navigation.getParam('imputation');
        const activity = navigation.getParam('activity');
        this.state = {
            tableHead: ['', ''],
            tableTitle: ['NumFbs', 'Client', 'MontantTtcFbs', 'MontantHtFbs', 'MontantTvaFbs', 'TauxTva', 'Imputation','Activity'],
            tableData: [
                [numFbs],
                [client],
                [montantTtcFbs+'DA'],
                [montantHtFbs+'DA'],
                [montantTvaFbs+'DA'],
                [tauxTva],
                [imputation],
                [activity],


            ]
        }
    }
    render() {
        const state = this.state;
        return (
            <View style={styles.container}>
                <Image style={styles.imageheader} source={require('./../img/first1.png')}></Image>
                <Text style={styles.header} >INFORMATION FACTURE</Text>
                <Table borderStyle={{ borderColor: '#004A99', borderWidth: 2, borderRadius: 5, }}>
                    <TableWrapper style={styles.wrapper}>
                        <Col data={state.tableTitle} style={styles.title} heightArr={[28, 28]} textStyle={styles.text1} />
                        <Rows data={state.tableData} flexArr={[1,1]} style={styles.row} textStyle={styles.text} />
                    </TableWrapper>
                </Table>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff', },
    head: { height: 40, backgroundColor: '#f5f5f0' },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#f5f5f0' },
    row: { height: 28 },
    text: {textAlign: 'center', fontSize: 15},
    text1: { textAlign: 'center', fontSize: 15, fontWeight: 'bold', },

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
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,


    },
});