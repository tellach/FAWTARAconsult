import React from 'react';
import { StyleSheet, Text, View, ImageBackground, FlatList,Image } from 'react-native';
import Login from './../login'
import Home1 from './../components/Home1'
import Facture from './../components/Facture'    
import FactInfo from './../components/FactInfo'
import Administration from './../components/Administration'
import Navigation2 from './Navigation2'
import ChangePw from './../components/ChangePw'
import Statistics from './../components/Statistics'

import { createStackNavigator, createAppContainer ,createBottomTabNavigator} from 'react-navigation'
 
const AppStackNavigator = createStackNavigator({
    Screen1: { 
        screen: Login,
        navigationOptions: {
            header: null,
            headerLeft: null,
            gesturesEnabled: false,
        }
             
    },
    Screen2: { 
        screen: Home1,
        navigationOptions: {
            
            header: null,
            headerLeft: null,
            gesturesEnabled: false,
        }
             
    },
    Screen3: {
        screen: Facture,
        navigationOptions: {
            //header: null,
            title: 'Factures',
            headerTintColor: '#004A99',
            headerTitleStyle: { color: '#004A99' },
            headerStyle: {
                backgroundColor: '#f5f5f0',
                borderColor: '#004A99',
                broderWidth: 1,

                
            },

        }

    },
    Screen4: {
        screen: Navigation2,
        navigationOptions: {
            title: 'Facture details',
            headerTintColor: '#004A99',
            headerTitleStyle: { color: '#004A99' },
            headerStyle: {
                backgroundColor: '#f5f5f0',
                borderColor: '#004A99',
                broderWidth:1,

            },
            
            //header: null,
            //headerLeft: null,
            // gesturesEnabled: false,
        }

    },    
    Screen5: {
        screen: Administration,
        navigationOptions: {
            //header: null,
            title: 'Administration',
            headerTintColor: '#004A99',
            headerTitleStyle: { color: '#004A99' },
            headerStyle: {
                backgroundColor: '#f5f5f0',
                borderColor: '#004A99',
                broderWidth: 1,


            },

        }

    },
    Screen6: {
        screen: ChangePw,
        navigationOptions: {
            //header: null,
            title: 'Modification',
            headerTintColor: '#004A99',
            headerTitleStyle: { color: '#004A99' },
            headerStyle: {
                backgroundColor: '#f5f5f0',
                borderColor: '#004A99',
                broderWidth: 1,


            },

        }

    },
    Screen7: {
        screen: Statistics,
        navigationOptions: {
            //header: null,
            title: 'Statistiques',
            headerTintColor: '#004A99',
            headerTitleStyle: { color: '#004A99' },
            headerStyle: {
                backgroundColor: '#f5f5f0',
                borderColor: '#004A99',
                broderWidth: 1,


            },

        }

    },
})

export default createAppContainer(AppStackNavigator);
