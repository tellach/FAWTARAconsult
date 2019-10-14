import React from 'react';
import { StyleSheet, Text, View, ImageBackground, FlatList, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Navigation3 from './navigation3'
import Info from './../components/FactInfo'
import Info2 from './../components/FactInfo2'
import Ligne from './../components/LigneInfo'
import Ligne2 from './../components/LigneInfo2'
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'

const AppTabNavigator = createBottomTabNavigator({

    Screen1: {
        screen: Info2,
        navigationOptions: {
            title: "INFO",
            tabBarIcon: ({ focused, tintColor }) => (
                
                <Icon
                    name="info"
                    size={30}
                    focused={focused}
                    tintColor={tintColor}
                     
                    />
            )
        }

    },
    Screen2: {
        screen: Ligne2,
        navigationOptions: {
            title: "LIGNE",
            tabBarIcon: ({ focused,tintColor }) => (
                <Icon
                    name="list"
                    size={30}
                    focused={focused}
                    tintColor={tintColor}
                     />
            )
        }
    }

},
    {
        tabBarOptions: {
            showLabel: false,
            showIcon: true,
            activeTintColor: 'black',
            inactiveTintColor: 'grey',
            activeBackgroundColor: 'white',
            inactiveBackgroundColor: '#004A99',
        }
    })
export default createAppContainer(AppTabNavigator);
