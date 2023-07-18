import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


const ForgotButton = (props) => {

    const { text, onPress } = props

    return (

        <TouchableOpacity style = {styles.forgotButton} onPress={onPress}>
            <Text style = { styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
    
}

export default ForgotButton;


const styles = StyleSheet.create ({
    forgotButton:{
        marginTop: 5,
        fontSize: 15,
        color: '#fff',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
})