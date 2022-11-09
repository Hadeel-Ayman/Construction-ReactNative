import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ItemDetails from "./screen/ItemDetails/ItemDetails";
import HomeScreen from "./screen/HomeScreen/HomeScreen";
const Stack = createNativeStackNavigator();

const AppScreen = () => {
    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen
                options={{ headerShown: false }}
                name="HomeScreen"
                component={HomeScreen}
            />
            <Stack.Screen
                options={{
                    headerShown: true,
                    headerTitle: "Details",
                    headerTitleAlign: "center",
                    headerTintColor: "#aaa",
                }}
                name="ItemDetails"
                component={ItemDetails}
            />
        </Stack.Navigator>
    );
};
export default AppScreen;
