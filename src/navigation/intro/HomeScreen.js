import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button onPress={() => navigation.navigate("Profile")}>Go To Profile</Button>
    </View>
  )
}

export default HomeScreen