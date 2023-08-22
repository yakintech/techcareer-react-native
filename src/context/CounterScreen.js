import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { CounterContext } from './CounterContext'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from 'react-native-paper'

const CounterScreen = () => {

    const { counter, setcounter } = useContext(CounterContext)

    return (<>
        <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:35}}>{counter}</Text>
            <Button onPress={() => setcounter(counter + 1)}>Increase</Button>
        </SafeAreaView>
    </>
    )
}

export default CounterScreen