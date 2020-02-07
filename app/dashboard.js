import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
class Dashboard extends React.Component {


    dologout(){
        AsyncStorage.removeItem("token")
        .then(
            res=>{
                this.props.navigation.navigate('Auth')
            },
            err =>{
                alert("network Error try Later");
            }
        )
    }
    render(){
        return (
            <View
            style ={styles.container}
            >
                <View style={styles.dashboardWrapper}>
                <Text style={ styles.userText}>Hey User</Text>
                <TouchableOpacity style={ styles.logoutBtn}
                 onPress ={() => this.props.navigation.navigate('Auth')}
                
                >
                    <Text style={styles.logoutBtnText}>Logout</Text>
                </TouchableOpacity>
                </View>
               
            </View>
        )
    }
}
export default Dashboard;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        alignItems:"center",
        justifyContent: "center"


    },
    userText:{
        fontSize:20,
        marginBottom: 20,
        fontWeight:'bold'
    },
    dashboardWrapper:{
        
    },
    logoutBtn:{
backgroundColor: 'red',
paddingVertical: 10,
width: 100,
alignSelf: 'center',

    },
    logoutBtnText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'

    }
  
});