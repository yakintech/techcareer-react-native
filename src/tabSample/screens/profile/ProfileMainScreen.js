import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { CounterContext } from '../../../context/CounterContext'
import { SafeAreaView } from 'react-native-safe-area-context'

const ProfileMainScreen = () => {

  const { counter } =  useContext(CounterContext)

  return (<>
    <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:40}}>{counter}</Text>
    </SafeAreaView>
  </>
  )
}

export default ProfileMainScreen