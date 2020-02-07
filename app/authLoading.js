import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class AuthLoading extends React.Component {
    constructor(){
        super();
        this.CheckToken()
    }
     CheckToken = async () =>{
         const token = await AsyncStorage.getItem("token")
         if(token){
             this.props.navigation.navigate("App")
         }
         else{
            this.props.navigation.navigate("Auth")

         }
     }
    render(){
        return (
            <View
            style ={styles.container}
            >
               <ActivityIndicator/>
               
            </View>
        )
    }
}
export default AuthLoading;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        alignItems:"center",
        justifyContent: "center"


    },
   
  
});