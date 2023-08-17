import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ProductStack from './src/tabSample/stack/ProductStack';
import ProfileStack from './src/tabSample/stack/ProfileStack';




const Tab = createBottomTabNavigator();

export default function App() {


    return <>
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Product" component={ProductStack} />
                <Tab.Screen name="Profile" component={ProfileStack} />
            </Tab.Navigator>
        </NavigationContainer>
    </>

}


