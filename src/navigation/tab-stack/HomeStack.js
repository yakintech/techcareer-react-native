import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeStack = createNativeStackNavigator();


const HomeStackScreen = () => {
  return (<>
    <HomeStack.Navigator>
      <HomeStack.Screen name="Chart" component={HomeChartScreen} />
      <HomeStack.Screen name="Home" component={HomeMainScreen} />

    </HomeStack.Navigator>
  </>)
}

export default HomeStackScreen


function HomeMainScreen() {
  return <Text>Home Main</Text>
}


function HomeChartScreen() {
  return <Text>Home Chart</Text>
}