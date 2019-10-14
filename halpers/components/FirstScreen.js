import React from 'react';
import { StyleSheet, Text, View, ImageBackground, FlatList, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import Navigation1 from './../navigations/Navigation1'

 class App extends React.Component {
    render() {
        return (
            <View onTouchEnd= {() => this.props.navigation.navigate('Screen2')
    }>
                
                <Image source={require('./../img/first1.png')} style={styles.ImageStyle} resizeMode="contain"
                    resizeMethod="resize"  />
            </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {
    
        //backgroundColor: '#03224c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ImageStyle:{
        width: 300  ,
        height: 300,   
        marginLeft:'50%',
        marginRight:'50%',
        marginTop:'50%',
        marginBottom:'50%',
        alignSelf: "center"
       

    }
});
const AppStackNavigator = createStackNavigator({
    Screen1: {
        screen: App,
        navigationOptions: {
            header: null,
        }

    },
    Screen2: {
        screen: Navigation1,
        navigationOptions: {
            header: null,
            //headerLeft: null,
            // gesturesEnabled: false,
        }

    },

})
export default createAppContainer(AppStackNavigator);
