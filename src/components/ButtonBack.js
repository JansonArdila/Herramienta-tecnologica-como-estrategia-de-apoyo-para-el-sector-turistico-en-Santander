import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


const ButtonBack = (props) => {

    const { text, onPress } = props

    return (

        <TouchableOpacity style = {[styles.buttonBack, styles.container]} onPress={onPress}>
            <Text style = { styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
    
}

export default ButtonBack;

const styles = StyleSheet.create({

    container: {
        height: 50,
        marginTop: 20,
        borderRadius: 25,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonBack: {
        flex: 1,
        width: "20%",
        position: "absolute",
        top: 40,
        right: 220,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#fff",
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },

});