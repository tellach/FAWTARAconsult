import React from 'react';
import { StyleSheet, Text, View, ImageBackground, FlatList, } from 'react-native';
import Login from './../login'
import Home1 from './../components/Home1'
import Facture from './../components/Facture'

import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'

const AppStackNavigator = createStackNavigator({
    Screen1: {
        screen: Home1,
        navigationOptions: {
            header: null,
        }

    },

    Screen2: {
        screen: Facture,
        navigationOptions: {
            header: null,
        }

    },
})

export default createAppContainer(AppStackNavigator);
