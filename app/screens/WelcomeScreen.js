import 'react-native-gesture-handler';
import React from 'react';
import {ImageBackground, Image,TouchableOpacity,TouchableHighlight ,StyleSheet, Text, Button, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



export default function WelcomeScreen({ navigation }) {
    return (
        <View style={styles.container}>

            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/log-pic.jpg')}/>
                <Text style={styles.textStyle}>nurturing innovation</Text>
            </View>

            <TouchableHighlight  style={styles.loginButton} underlayColor={"#D1CE9F"}  onPress = {() => navigation.navigate("Login")}>
                <Text style={styles.bttextStyle}>Log In</Text>
            </TouchableHighlight>

            <TouchableHighlight  style={styles.registerButton} underlayColor={"#9EA1D0"}  onPress = {() => navigation.navigate("Online Application")}>
                <Text style={styles.bttextStyle}>Apply To Riara University</Text>  
            </TouchableHighlight>
                      
        </View> 
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "flex-end",
        backgroundColor: '#FFFFFF',
        alignItems: "center"
    },
    logoContainer:{
        position: "absolute",
        top:200,
        alignItems:"center"
    },
    logo:{
        width:170,
        height:95,     
    },
    textStyle:{
        fontSize:18,
        fontFamily: "arial",
        fontWeight: "bold",
        color: '#2D2D84',
    },
    loginButton:{
        textAlign: 'center',
        fontWeight: 'bold',
        width: '100%',
        height : 70,
        backgroundColor: '#7D0552',
        justifyContent: "center",
        paddingHorizontal: 10,
    },
    registerButton: {
        justifyContent: "center",
        textAlign: 'center',
        fontWeight: 'bold',
        width: '100%',  
        height : 70,
        backgroundColor: '#2D2D84',
        paddingHorizontal: 10,
    },
    bttextStyle:{
        fontSize:17,
    },     
 }); 
//'#191970'
//export default WelcomeScreen;