import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import ButtonRegister from "../components/ButtonRegister";
import BackgroundImage from "../components/BackgroundImage";
import { StatusBar } from "expo-status-bar";
import ForgotButton from "../components/ForgotButton";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from "../../firebase-config";
//import { NavigationContainer } from "@react-navigation/native";
//import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { useNavigation } from "@react-navigation/native";




const HomeScreen = ({ navigation }) => {

    const [ email, setEmail] = React.useState('')
    const [ password, setPassword] = React.useState('')
    //const navigation = useNavigation();

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) =>{
            console.log('Signed in')
            const user = userCredential.user;
            console.log(user)
            navigation.navigate('GuideScreen');
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    return (
        <><BackgroundImage>
            <View style={styles.container}>                
                <ButtonRegister
                    text="Registrarse"
                    onPress={() => {
                        navigation.navigate('RegisterScreen');
                    } } />
                <Text style={styles.titulo}>TURISMO</Text>
                <Text style={styles.subtitle}>Ingresa tu cuenta y contraseña</Text>
                <View>
                    <TextInput onChangeText={(text) => setEmail(text)} placeholder='tucuenta@ejemplo.com' style={styles.input} />
                </View>
                <View>
                    <TextInput secureTextEntry={true} onChangeText={(text) => setPassword(text)} placeholder='password' style={styles.input} />
                </View>    
                <TouchableOpacity onPress={handleSignIn} style={styles.button}>
                    <Text style={styles.buttonText}>Iniciar sesión</Text>
                </TouchableOpacity>            
                <ForgotButton
                    text="¿Olvidaste tu constraseña?"
                    onPress={() => {
                        navigation.navigate('ForgotScreen');
                    }}/>
                <StatusBar style="auto" />
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
    titulo: {
        fontSize: 80,
        color: '#fff',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 20,
        color: '#fff',
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
    }
});

export default HomeScreen;