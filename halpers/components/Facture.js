import React from 'react';
import { StyleSheet, Text, View, ImageBackground, FlatList, Image, TouchableOpacity, ActivityIndicator} from 'react-native';
import { getFacturesById,getFactures } from '../API'
import factures1 from './../halpers/data'

export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.idClient = "" 
        this.state = {
            factures: [],
            isLoading: false
        }
    }
         _loadfacture() {
              this.setState({ isLoading: true }) // Lancement du chargement
              getFacturesById(this.idClient).then(data => {
                this.setState({
                    factures: factures1,//data
                    isLoading: false // Arrêt du chargement
                })
            })    
   
    }
    _displayLoading() {  
        if (this.state.isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' />
                    {/* Le component ActivityIndicator possède une propriété size pour définir la taille du visuel de chargement : small ou large. Par défaut size vaut small, on met donc large pour que le chargement soit bien visible */}
                </View>
            )
        }
    }

    

    render() {
        const { navigation } = this.props;
        this.idClient = navigation.getParam('id');
        

        return (

            <View style={styles.container} onLayout={() => this._loadfacture()}>
                <View style={styles.opa_container}>
                    <View style={styles.row}>
                        <Image style={styles.imageheader} source={require('./../img/first1.png')}></Image>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.btntext1} onPress={()=>this._loadfacture()} >
                            <Image style={styles.btntext1} source={require('./../img/synch.png')}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:5}} >
                    <Text style={styles.header}>Liste des factures</Text>
                    {this._displayLoading()}
                    <FlatList
                        style={{ flexDirection: 'column', flexWrap: 'wrap', }}
                        data={this.state.factures}
                        keyExtractor={(item) => item.numFbs.toString()}
                        renderItem={({ item }) => <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Screen4',item)} >
                            <Text style={styles.btntext2}> Facture N° :  {item.numFbs}</Text>
                        </TouchableOpacity>}  
                    /> 
                </View>
    
            </View>   
        

        );
    }
}


const styles = StyleSheet.create({
    container: {
        //marginTop: 10,
        flex: 1,
        //backgroundColor: '#03224c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    opa_container: {
        //marginTop: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        justifyContent: "space-around",
        //backgroundColor:'#f5f5f0',
        borderBottomEndRadius: 20,
        borderBottomStartRadius:20,
        //borderWidth:2,
        //borderColor: '#004A99'

    },
    row: {
        marginTop:8,
        flex: 1
    },
    btntext1: {
        width: 25,
        height: 35,  
        marginTop: 10,
        marginLeft: 61,
        marginRight:5,


    },
    imageheader: {
        
        width: 186,
        height: 75,
        marginTop: 5,
        marginLeft: 5,
        marginRight: 60,

    },

    header: {
        textAlign: 'center', 
        //alignItems: 'center',
        fontSize: 30,
        color: '#004A99',
        paddingBottom: 30,
        // borderBottomColor: '#199187',
        borderBottomWidth: 1,
        fontWeight: 'bold',
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,


    },
    button: {

        padding: 20,
        backgroundColor: '#f5f5f0',
        margin: 5,
        borderRadius: 10,
        borderWidth:2,
        borderColor: '#004A99'

    },
    btntext2: {
        textAlign:'center',
        color: 'black',
        fontWeight: 'bold',
    },

    /*sync: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
 
    },
    sync2: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },

    header: {
        //textAlign: 'center', 
        //alignItems: 'center',
        fontSize: 30,
        color: '#004A99',
        paddingBottom: 30,
       // borderBottomColor: '#199187',
        borderBottomWidth: 1,
        fontWeight: 'bold',
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,


    },

    imageheader: {
       // alignItems: 'center',
        width: 120,
        height: 100     ,
        alignSelf: "center",
        
    },
    
    button: {
        padding: 20,
        backgroundColor: '#f5f5f0',
        margin: 10,
        borderRadius: 10,
        borderColor: '#004A99'

    },
    button1:{
        //alignItems: 'center',
        padding: 20,
        backgroundColor: '#004A99',
        //margin: 30,
        //marginTop:10,
        borderRadius: 10,
        flex: 1

    },

    btntext2: {
        color: 'black',
        fontWeight: 'bold',
    },*/
    

});
