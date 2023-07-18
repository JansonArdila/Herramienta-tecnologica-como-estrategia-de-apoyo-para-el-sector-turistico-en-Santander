import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import BackgroundImage from "../components/BackgroundImage";
import ButtonBack from "../components/ButtonBack";


const ForgotScreen = ({ navigation }) => {
    
    return (
        <><BackgroundImage>
            <View style={styles.container}>
                <ButtonBack
                    text="Volver"
                    onPress={() => {
                        navigation.navigate('HomeScreen');
                    } } />
                <Text style={styles.subtitle}>Ingresa tu correo electrónico para recuperar tu contraseña</Text>
                <View>
                    <TextInput placeholder='tucuenta@ejemplo.com' style={styles.input} />
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Recuperar</Text>
                </TouchableOpacity>                
            </View>
        </BackgroundImage></>
    );
}

export default ForgotScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        padding: 10,
        paddingStart: 30,
        width: 250,
        height: 40,
        marginTop: 20,
        borderRadius: 30,
        backgroundColor: '#fff',
    },
    subtitle: {
        fontSize: 25,
        color: '#fff',
        marginEnd: 20,
        textAlign: 'center',
    },
    button: {
        top: 100,
        backgroundColor: '#fff',
        borderRadius: 30,
        height: 40,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    }
})