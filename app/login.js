import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

class Login extends React.Component {

    render(){
        return (
            <View
            style ={styles.container}
            >

               <View style= {styles.formWrapper}>
                   <Text style = {styles.welcomeText}>Welcome Back User</Text>
                <View style = {styles.formRow}>
                    <TextInput
                       style={styles.textInput}
                       placeholderTextColor ='#333'
                        placeholder="username">
                    </TextInput>
                </View>
                <View style = {styles.formRow}>
                    <TextInput
                       style={styles.textInput}
                       placeholderTextColor ='#333'
                        placeholder="username">
                    </TextInput>
                </View>
                <TouchableOpacity style={ styles.signin}>
                    <Text style={ styles.signinText}>SignIn</Text>
                </TouchableOpacity>
               </View>
               
            </View>
        )
    }
}
export default Login;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        alignItems:"center",
        justifyContent: "center"


    },
    formWrapper:{
        width: '90%',

    },
    formRow:{
        marginBottom: 10
    },
    textInput:{
       backgroundColor:"#ddd",
       height: 40,
       paddingHorizontal: 10,
       color: '#333'
    },
    welcomeText:{
        textAlign:'center',
        marginBottom: 30,
        fontSize: 20,
        fontWeight: 'bold'
    },
    signin:{
        backgroundColor: 'blue',
        paddingVertical: 10,

        
    },
     signinText:{
        textAlign: 'center',
        color:'#fff',
        fontSize: 20,
        fontWeight: 'bold'
     }
});