import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, AsyncStorage} from 'react-native';
//import { Icon } from 'react-native-elements';
import { createStackNavigator, createAppContainer, KeyboardAvoidingView  ,ScrollView} from 'react-navigation';
import Home1 from './components/Home1'
import Regform from './regform'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.username = "" 
    this.password = "" 
    this.state = {  
      token:"",
    }
  }   
  _connexion(){
    console.log(this.username)
      if(this.username.length>0 && this.password.length>0){
        fetch('http://192.168.43.213:35839/Facturation/api/production/login', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type':'application/json',
          },
          body: JSON.stringify({    
            username: this.username,     
            password:this.password,
          }),
        }).then(response => response.json())
          .then(responseJson=>{
            const rep = responseJson;
            console.log(rep)
            if (rep === "failed") {  
              alert('user ou mot de passe incorrect')
            }
            else {
              const item = {
                'id': this.username
              }
              this.setState({ token: rep })
              this._storeData()
              this.props.navigation.navigate('Screen2', item)
            }
            
        }).catch((error) => {
         console.log("Api call error");      
         alert(error.message);
       });
       // this.props.navigation.navigate('Screen2')
      }
  }
  _connexion1() {
    console.log(this.username)
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
        let rep1=response
        let reponse1 = JSON.stringify(response._bodyText)
        console.log(reponse1)
        console.log(rep1)
         if(reponse1==='"failed"')
        {
          alert('user ou mot de passe incorrect')
        }
        else{
          const item={
            'id':this.username
          } 
          this.setState({ token: reponse1 })
          this._storeData()
          this.props.navigation.navigate('Screen2', item)
        }

      }).catch((error) => {
        console.log("Api call error");
        alert(error.message);
      });
      // this.props.navigation.navigate('Screen2')
    }
  }

  _storeData = async () => {
    try {
      await AsyncStorage.setItem('token', this.state.token);
    } catch (error) {
      console.log('Error saving data')
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

         <Image style={styles.imageheader} source={require('./img/first1.png')}></Image>
      <View style={styles.regform}>   
          <View style={styles.searchSection}>
              <Image source={require('./img/user.png')} style={styles.ImageStyle} />
              <TextInput
                style={styles.textinput}
                placeholder='  username'
                placeholderTextColor={'black'}          
                underlineColorAndroid={'transparent'}
                onChangeText={(text) => this._usernameChanged(text)}
                >
              </TextInput>
          </View>
          <View style={styles.searchSection}>
            <Image source={require('./img/password.png')} style={styles.ImageStyle} />
            <TextInput style={styles.textinput} placeholder='  Password' placeholderTextColor={'black'}  underlineColorAndroid={'transparent'} secureTextEntry={true} onChangeText={(text) => this._passwordChanged(text)}></TextInput>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => this._connexion()}>
            <Text style={styles.btntext1}>Connecter</Text>
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
    alignSelf:'stretch',
    margin:30
  },
  header:{
      textAlign:'center',
      alignItems: 'center',
      fontSize:24,
      color:'black',
      paddingBottom:10,
      marginBottom:30,
      borderBottomColor:'#199187',
      borderBottomWidth:1,
      fontWeight: 'bold',
      
  },
  textinput:{
      flex:1,
      height:45,
      marginBottom:10,
      color:'black',
      //borderBottomColor:'black',
      //borderBottomWidth:1,

      //padding:30
      
  },
  button:{
      alignItems:'center',
      padding:20,
      backgroundColor:'#004A99',
      marginTop:10,
      borderRadius: 10,

  },
  button1:{
    alignSelf:'stretch',
    alignItems:'center',
    backgroundColor:'#B2D7F9',
    padding:20,
    marginTop:5,
    borderRadius: 10,

},
  btntext1:{
    color:'#fff',
    fontWeight:'bold',
  },
    btntext2: {
    color: 'black',
    fontWeight: 'bold',
  }
  ,
  searchIcon:{
    padding: 10,
  },
  searchSection:{
    flexDirection: 'row',
    borderColor: '#004A99',
    borderWidth: 2,
    backgroundColor: '#f5f5f0',
    borderRadius: 10,
    marginBottom: 10,
  },
  ImageStyle: {
    padding: 20,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center'
  },
  imageheader: {

    width: 280,
    height: 113,  
    alignItems: 'center'

  },
});


