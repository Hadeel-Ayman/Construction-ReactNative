import { ActivityIndicator} from "react-native";
import {
  OnBoardingScreen,
  HomeScreen,
  Details,
  Contact,
  Navigation,
} from "./src/screen/importsFile";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    CairoBold: require("./assets/fonts/static/Cairo-Bold.ttf"),
    CairoSemiBold: require("./assets/fonts/static/Cairo-SemiBold.ttf"),
    CairoRegular: require("./assets/fonts/static/Cairo-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="OnBoardingScreen ">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="OnBoardingScreen " component={OnBoardingScreen } />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Navigation" component={Navigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
