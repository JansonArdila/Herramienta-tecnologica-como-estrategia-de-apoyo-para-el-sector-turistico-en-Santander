import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import ButtonRegister from "../components/ButtonRegister";

const BackgroundImage = ({ children }) => (
    <ImageBackground source={require("../components/images/paramo-de-santurban.png")} style={styles.backgroundImage}>
        <View style={styles.container}>      
            {children}   
        </View>
    </ImageBackground>
);


export default BackgroundImage;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.5)",
      alignItems: "center",
      justifyContent: "center",
      //position: "relative",
    },
    backgroundImage: {
      flex: 1,
      resizeMode: "cover",
    },
});

