import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import ButtonBack from "../components/ButtonBack";
import BackgroundImage from "../components/BackgroundImage";


const GuideScreen = ({navigation}) => {

    
    return (
        <><BackgroundImage>
            <View style={styles.container}>
                <ButtonBack
                    text="X"
                    onPress={() => {
                        navigation.navigate('MapScreen');
                    } } />
            <Text style={styles.subtitle}>1. En el mapa encontrarás un mapa que te mostrará los sitios turísticos cercanos a tu ubicación.</Text>
            <Text style={styles.subtitle}>2. Busca el sitio que más te llame la atención y se adapte a lo que buscas.</Text>
            <Text style={styles.subtitle}>3. Presiosa sobre el sitio y traza la ruta para ir a tu sitio de destino.</Text>
            <Text style={styles.subtitle}>4. Dirígite hacia el lugar de destino y disfruna lo más que puedas.</Text>
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

export default GuideScreen;