import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Unit = (props) => {
    return(
        <View style={styles.item}>
            <TouchableOpacity style={styles.itemLeft} onPress = {() => navigation.navigate("Unit")}>
                <TouchableOpacity style={styles.square} ></TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </TouchableOpacity>
            {/* <View style={styles.circular}></View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,


    },
    itemLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square:{
        width:24,
        height:24,
        backgroundColor: '#2D2D84',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    
    },
    itemText:{
        maxWidth: '90%',
    },
    circular:{
        width:12,
        height:12,
        borderRadius:5,
        borderWidth:2,
        borderColor: '#55BCF6'
    },

})
//2D2D84
//FFFF50
//55BCF6
export default Unit;