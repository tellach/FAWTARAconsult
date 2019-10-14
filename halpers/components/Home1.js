// Components/Search.js

import React from 'react'
import { ScrollView, StyleSheet, View, TextInput, Button, Text, FlatList, ActivityIndicator, TouchableOpacity, Image, AsyncStorage} from 'react-native'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.idClient = ""
        this.state = {
            token: "",
            info:""
        }
    }  
    _getClientByid(id) {
        this._retrieveData()

        if (this.state.token.length > 0){
            fetch('http://192.168.1.2:35839/Facturation/api/production/client/' + id, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'autorization': this.state.token,

                },
            }).then(response =>response.json())
            .then(responseJson=>{
                //console.log(responseJson)
                const response1 = responseJson
                const item1 = {
                    'id': id,  
                    'reponse': response1,
                    'token':this.state.token
                }
                this.props.navigation.navigate('Screen5',item1)
            })
            .catch((error) => {  

                console.log("Api call error");
                alert(error.message);

            });
        }
         
    }

    _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('token');
            if (value !== null) {
                this.setState({ token: value })
            }
        } catch (error) {
            console.log(" Error retrieving data")  
        }
    }

    render() {
        const { navigation } = this.props;
        const username = navigation.getParam('id');
        const item={
            'id':username
        }
       
        return (
         
        <ScrollView>
                <View style={styles.main_container} onLayout={() => this._retrieveData()}>
                <Image style={styles.imageheader} source={require('./../img/first1.png')}></Image>
                <View style={styles.opa_container}>
                    <View style={styles.row1}>
                            <TouchableOpacity style={styles.button1} onPress={() => this._getClientByid(username)}>
                                <Image
                                    style={styles.image}
                            source={require('./../img/a1.png')}
                />
                        </TouchableOpacity>
                            <TouchableOpacity style={styles.button2} onPress={() => this.props.navigation.navigate('Screen3', item)
}>
                                <Image
                                    style={styles.image}
                            source={require('./../img/b1.png')}
                                />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row1}>
                        <TouchableOpacity style={styles.button3}>
                                <Image
                                    style={styles.image}
                            source={require('./../img/c1.png')}
                                />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button4}>
                                <Image
                                    style={styles.image}
                            source={require('./../img/d1.png')}
                                />
                        </TouchableOpacity>
                    </View>
                    </View>
            </View>
            </ScrollView> 
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
        

    },
    textinput: {
        fontSize: 28,
        textAlign: 'center',
        alignItems: 'center',
        color: 'black',
        paddingBottom: 10,
        marginBottom: 0,
        borderBottomColor: '#199187',
        borderBottomWidth: 1,
        fontWeight: 'bold',

    },
    button1: {
        alignItems: 'center',
        padding: 40,
        backgroundColor: '#fff',
        marginTop: 5, 
        flexWrap: 'wrap',
        marginLeft:5,
        marginRight:5,
        borderRadius: 10,
        backgroundColor: '#f5f5f0',
        borderColor: '#004A99',
        borderWidth:3,


    },
    button2: {
        alignItems: 'center',
        padding: 40,
        backgroundColor: '#fff',
        marginTop: 5,
        flexWrap: 'wrap',
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 10,
        backgroundColor: '#f5f5f0',
        borderColor: '#004A99',
        borderWidth: 3,
    },
    button3: {
        alignItems: 'center',
        padding: 40,
        backgroundColor: '#fff',
        marginTop: 5,
        flexWrap: 'wrap',
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 10,
        backgroundColor: '#f5f5f0',
        borderColor: '#004A99',
        borderWidth: 3,

    },
    button4: {
        alignItems: 'center',
        padding: 40,
        backgroundColor: '#fff',
        marginTop: 5,
        flexWrap: 'wrap',
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 10,
        backgroundColor: '#f5f5f0',
        borderColor: '#004A99',
        borderWidth: 3,

    },
    btntext: {
        alignItems: 'center',
        textAlign: 'center',
        flex:1,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 10,
        
    },
    opa_container:{
        marginTop:15,
        flexDirection:'row',
        flexWrap: 'wrap',
        flex:1,
    },
    row1:{
        flex:1
    },
    

    image: {
        alignItems: 'center',
        flex:1,
        width: 120,
        height: 130,

    },
    imageheader:{
        alignItems: 'center',
        flex: 1,
        width: 190,
        height: 75,
        alignSelf: "center"

    }

    
})

export default Home