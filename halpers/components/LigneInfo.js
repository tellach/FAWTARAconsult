import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, FlatList} from 'react-native';

export default class FactInfo extends Component {

    render() {
        const { navigation } = this.props;
        const ligneFacts = navigation.getParam('ligneFacts');
        var i=0

        return (
            <View style={styles.container}>
                <Image style={styles.imageheader} source={require('./../img/first1.png')}></Image>
                <Text style={styles.header}>LIGNES FACTURE</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap',}}>
                    <View style={{marginRight:2}}> 
                        <View textL>
                            <Text style={{ fontSize: 17, margin: 6, fontWeight: 'bold', textAlign: "center" }}>Code Catg</Text>
                        </View>
                        <FlatList
                            data={ligneFacts}
                            keyExtractor={
                                (item) => item.codeCat.toString()
                            }

                            renderItem={({ item }) =>
                                <View style={styles.textL}>
                                    <Text style={{ fontSize: 17, margin: 6, textAlign: "center" }}>{item.codeCat}</Text>
                                </View>
                            }
                        />
                    </View>
                    <View style={{ marginRight: 2 }}>
                        <View textL>
                            <Text style={{ fontSize: 17, margin: 6, fontWeight: 'bold', textAlign: "center"}}>Quantité</Text>
                        </View>
                        <FlatList
                            data={ligneFacts}
                            keyExtractor={
                                (item) => item.codeCat.toString()
                            }

                            renderItem={({ item }) =>
                                <View style={styles.textL}>
                                    <Text style={{ fontSize: 17, margin: 6, textAlign: "center"}}>{item.qteCat}</Text>
                                </View>
                            }
                        />
                    </View>
                    <View>
                        <View textL>
                            <Text style={{ fontSize: 17, margin: 6, fontWeight: 'bold',textAlign:"center" }}>Prix</Text>
                        </View>
                        <FlatList
                            data={ligneFacts}
                            keyExtractor={
                                (item) => item.codeCat.toString()
                            }

                            renderItem={({ item }) =>
                                <View style={styles.textL}>
                                    <Text style={{ fontSize: 17, margin: 6 ,textAlign:"center"}}>{item.prixCat} DA</Text>
                                </View>
                            }
                        />
                    </View>



                </View>
                
 

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,  
        //backgroundColor: '#03224c',
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageheader: {
        alignItems: 'center',
        //flex: 1,
        width: 186,
        height: 75,
        alignSelf: "center",
        marginBottom:12

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
    textL:{
        borderWidth:2,
        borderColor: '#004A99',
        borderRadius: 5,
        marginBottom:5,
    }
});