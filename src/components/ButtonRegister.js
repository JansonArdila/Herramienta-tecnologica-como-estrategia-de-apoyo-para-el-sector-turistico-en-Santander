import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


const ButtonRegister = (props) => {

    const { text, onPress } = props

    return (

        <TouchableOpacity style = {[styles.registerButton, styles.container]} onPress={onPress}>
            <Text style = { styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
    
}

export default ButtonRegister;

const styles = StyleSheet.create({

    container: {
        width: '30%',
        height: 50,
        marginTop: 20,
        borderRadius: 25,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },

    registerButton: {
        position: 'absolute',
        top: 40,
        right: 10,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#fff',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },

});