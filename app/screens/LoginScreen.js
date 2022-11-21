
import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { TextInput, StyleSheet, Text,View, Image, Linking, Icon, TouchableHighlight} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// export class LoginScreen extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             email:'',
//             password: '',
//         }
//     }
//     onSignUp() {
//         const { email, password,} = this.state;
        
//     }
//     render() {
//         return (
//             <View style={styles.container}>

//                 <View style={styles.logoContainer}>
//                     <Image style={styles.logoImage} source={require('../assets/log-pic.jpg')}/>
//                     <Text style={styles.textStyle}>nurturing innovation</Text>
//                 </View>

//                 <TextInput style={styles.inputText} placeholder="Email or Admission Number" placeholderTextColor="#191970" onChangeText={(email) => this.setState({email})}/>

//                 <TextInput style={styles.inputText} placeholder="Password" placeholderTextColor="#191970" secureTextEntry={true} onChangeText={(password) => this.setState({password})}/>
                
//                 <View style={styles.textApplyContainer}>
//                     <Text style={styles.textApply} onPress={ ()=> Linking.openURL('https://www.riarauniversity.ac.ke/') } >Need to Apply? Apply Here</Text>
//                 </View>
                
//                 <TouchableHighlight  style={styles.loginButton} underlayColor={"#7D0552"}  onPress = {() => navigation.navigate("Profile")}>
//                     <Text style={styles.btnText}>Sign In</Text> 
//                 </TouchableHighlight>
                
//             </View>
//         )
//     }
// }

export default function LoginScreen({ navigation }) {
    
    return (
        <View style={styles.container}>

                <View style={styles.logoContainer}>
                    <Image style={styles.logoImage} source={require('../assets/log-pic.jpg')}/>
                    <Text style={styles.textStyle}>nurturing innovation</Text>
                </View>

                <TextInput style={styles.inputText} placeholder="Email or Admission Number" placeholderTextColor="#191970" />

                <TextInput style={styles.inputText} placeholder="Password" placeholderTextColor="#191970"/> 
                
                <View style={styles.textApplyContainer}>
                    <Text style={styles.textApply} onPress={ ()=> Linking.openURL('https://www.riarauniversity.ac.ke/') } >Need to Apply? Apply Here</Text>
                </View>
                
                <TouchableHighlight  style={styles.loginButton} underlayColor={"#7D0552"}  onPress = {() => navigation.navigate("Profile")}>
                    <Text style={styles.btnText}>Sign In</Text> 
                </TouchableHighlight>
                
            </View> 
    )
}
const styles = StyleSheet.create({ 
    container: {
        justifyContent: "flex-end",
        backgroundColor: '#FFFFFF',
        alignItems: "center",
        flex:1,
    },
    logoContainer:{
        position: "absolute",
        top:100,
        alignItems:"center"
    },
    logoImage:{
        width:170,
        height:95,   
    },
    textStyle:{
        fontSize:18,
        fontFamily: "arial",
        color: '#2D2D84',
        fontWeight: "bold"
    },
    inputText:{
        justifyContent:"center",
        borderColor: '#2D2D84',
        alignItems: "center",
        width: "80%",
        height:40,
        borderWidth:1 , 
        marginBottom:20,
        padding:20,
    },
    textApplyContainer:{
        justifyContent:"center",
        borderColor: '#2D2D84',
        alignItems: "center",
        width: "80%",
        height:40,
    },
    textApply:{
        fontSize:14,
        fontWeight: "bold",
        paddingTop: 5,
        paddingBottom: 10,
        textDecorationLine: 'underline'
    },
    loginButton: {
        width: 100,
        height : 50,
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: '#191970',
        marginBottom: 50,
        marginTop: 20,
        borderRadius:25,
    },
    btnText:{
        justifyContent:"center",
        color:"white",
        alignItems: "center"
    },      
 }); 

//rce


