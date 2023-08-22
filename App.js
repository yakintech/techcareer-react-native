import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ProductStack from './src/tabSample/stack/ProductStack';
import ProfileStack from './src/tabSample/stack/ProfileStack';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CounterScreen from './src/context/CounterScreen';
import { CounterProvider } from './src/context/CounterContext';




const Tab = createBottomTabNavigator();

export default function App() {


    return <>
        <CounterProvider>
            <NavigationContainer>
                <Tab.Navigator screenOptions={{ headerShown: false }}>
                    <Tab.Screen name="Product" component={ProductStack} />
                    <Tab.Screen name="Profile" component={ProfileStack} />
                    <Tab.Screen name="Counter" component={CounterScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        </CounterProvider>

    </>

}




