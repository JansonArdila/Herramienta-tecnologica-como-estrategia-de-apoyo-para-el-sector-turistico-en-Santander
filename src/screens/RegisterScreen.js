import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import ButtonBack from "../components/ButtonBack";
import BackgroundImage from "../components/BackgroundImage";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase-config";


const RegisterScreen = ({navigation}) => {

    const [ email, setEmail] = React.useState('');
    const [ password, setPassword] = React.useState('');

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handleCreateAccount = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('Account created')
            const user = userCredential.user;
            console.log(user)
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    return (
        <><BackgroundImage>
            <View style={styles.container}>
                <ButtonBack
                    text="Volver"
                    onPress={() => {
                        navigation.navigate('HomeScreen');
                    } } />
                <Text style={styles.subtitle}>Ingresa tus datos</Text>
                <TextInput placeholder='Nombre' style={styles.input} />
                <TextInput placeholder='Apellido' style={styles.input} />
                <TextInput onChangeText={(text) => setEmail(text)}placeholder='tucuenta@ejemplo.com' style={styles.input} />
                <TextInput onChangeText={(text) => setPassword(text)}placeholder='password' style={styles.input} />
                <TouchableOpacity onPress={handleCreateAccount} style={styles.button}>
                    <Text style={styles.buttonText}>Registrarse</Text>
                </TouchableOpacity> 
            </View>
        </BackgroundImage></>
    );
};

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
    },
    subtitle: {
        fontSize: 25,
        color: '#fff',
    }

});

export default RegisterScreen;