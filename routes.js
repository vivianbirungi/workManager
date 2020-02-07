import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './app/login';
import Dashboard from './app/dashboard';
import AuthLoading from './app/authLoading';


const BeforeSignin = createStackNavigator({
    Login:{
       screen: Login 
    }
},{
    headerMode: 'none',
    initialRouteName: 'Login'
});
 
const AfterSignin = createStackNavigator({
    Dashboard:{
        screen: Dashboard
    }
},{
headerMode: 'none',
initialRouteName: 'Dashboard'
});
const AppNavigator = createStackNavigator({
    Auth: BeforeSignin,
    App: AfterSignin,
    AuthLoadingScreen: AuthLoading
},
{
    headerMode: 'none',
    initialRouteName: 'AuthLoadingScreen'
}
)
export default createAppContainer(AppNavigator)