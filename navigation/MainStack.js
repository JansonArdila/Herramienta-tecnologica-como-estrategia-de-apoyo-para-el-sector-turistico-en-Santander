import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../src/screens/HomeScreen";
import RegisterScreen from "../src/screens/RegisterScreen";
import ForgotScreen from "../src/screens/ForgotScreen";
import MapScreen from "../src/screens/MapScreen";
import GuideScreen from "../src/screens/GuideScreen";


const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>

                <Stack.Screen                    
                    name = 'HomeScreen'
                    component={HomeScreen}
                />

                <Stack.Screen
                    name = 'RegisterScreen'
                    component={RegisterScreen}
                />

                <Stack.Screen
                    name = 'ForgotScreen'
                    component={ForgotScreen}
                />

                <Stack.Screen
                    name = 'GuideScreen'
                    component={GuideScreen}
                />

                <Stack.Screen
                    name = 'MapScreen'
                    component={MapScreen}
                />


            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack;