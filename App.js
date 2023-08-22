import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ProductStack from './src/tabSample/stack/ProductStack';
import ProfileStack from './src/tabSample/stack/ProfileStack';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CounterScreen from './src/context/CounterScreen';
import { CounterProvider } from './src/context/CounterContext';
import FavoritesScreen from './src/context/FavoritesScreen';
import { FavoritesContext, FavoritesProvider } from './src/context/FavoritesContext';
import { useContext } from 'react';
import TabMain from './src/tabSample/TabMain';





export default function App() {


    return <>
        <FavoritesProvider>
            <CounterProvider>
                <TabMain/>
            </CounterProvider>
        </FavoritesProvider>


    </>

}




