import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Details from "../Details/details";
import Contact from '../Contact/contact';
import Ionic from 'react-native-vector-icons/Ionicons';
import AppScreen from "../../AppScreen";
const Tap = createBottomTabNavigator();

const Navigation = () => (
    <Tap.Navigator
        initialRouteName="الرئيسية"
        screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: { height: 57, paddingVertical: 10 },
            tabBarIcon: ({ focused, size, color }) => {
                let iconImage;
                if (route.name == "الرئيسية") {
                    iconImage = focused ? "home-sharp" : "home-outline";
                } else if (route.name == "من نحن") {
                    iconImage = focused ? "phone-portrait" : "ios-phone-portrait-sharp";
                } else if (route.name == "اتصل بنا") {
                    iconImage = focused ? "ios-call-outline" : "ios-call-outline";
                }
                return <Ionic name={iconImage} size={size} color={color} />;
            },
        })}
    >
        <Tap.Screen name="اتصل بنا" component={Contact} options={false} />
        <Tap.Screen name="من نحن" component={Details} options={false} />
        <Tap.Screen
            name="الرئيسية"
            component={AppScreen}
            options={{ headerShown: false }}
        />
    </Tap.Navigator>
);

export default Navigation;