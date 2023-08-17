import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileMainScreen from '../screens/profile/ProfileMainScreen'

const ProfileStackScreens = createNativeStackNavigator();

const ProfileStack = () => {
  return (<>
    <ProfileStackScreens.Navigator>
      <ProfileStackScreens.Screen name="Profile" component={ProfileMainScreen} />

    </ProfileStackScreens.Navigator>
  </>
  )
}

export default ProfileStack