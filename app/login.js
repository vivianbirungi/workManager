import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
class Login extends React.Component {
state = {
    email :'',
    password:'',
    loading: false
}
onChangeHandle(state, value){
    this.setState({
        [state]: value
    })
}

doLogin(){
    const { email, password} = this.state;
    if(email && password){
        const req = {
            "email": email,
            "password": password
        }
        this.setState({
            loading: true
        })
        axios.post('https://reqres.in/api/login', req)
        .then(
       
            res =>{
                this.setState({
                    loading: false
                })
                AsyncStorage.setItem("token", res.data.token)
                .then(
                    res =>{
                        this.props.navigation.navigate('App')
                       alert("login succesfull")
                    }

                )
            },
            err => {
                this.setState({
                    loading: false
                })
                alert( "username or password is wrong");
            }
        )
    }
    else{
        alert( "Enter username && password ");

    }
    
}
    render(){
        const {email, password, loading} = this.state;
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
                        placeholder="email"
                        value = {email}
                        onChangeText={ (value)=> this.onChangeHandle('email', value)}>
                    </TextInput>
                </View>
                <View style = {styles.formRow}>
                    <TextInput
                       style={styles.textInput}
                       placeholderTextColor ='#333'
                        placeholder="password"
                        secureTextEntry = {true}
                        value = {password}
                        onChangeText={ (value)=> this.onChangeHandle('password', value)}>
                        
                    </TextInput>
                </View>
                <TouchableOpacity 
                activeOpacity = {0.8}
                style={ {
                    ...styles.signin,
                    backgroundColor: loading ? "#ddd" :"blue"
                }}
                 onPress ={() => this.doLogin()
                    
                }
                disabled = {loading}
                >
                    
                    <Text style={ styles.signinText}>
                    {loading ? "loading...." : "signin"}
                        </Text>
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