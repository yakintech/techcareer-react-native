import { View, Text, Button, SafeAreaView } from 'react-native'
import React, { useState } from 'react'

const StateIntro = () => {

    console.log('Component rendered!!');
    //counter değişkeni benim bir state değişkenimdir. counter değeri setCounter tarafından değiştirildiği an fonksiyon bir daha çalışır.

    //setCounter fonksiyonu state değişkenini değiştirmemizi sağlar.
    const [counter, setCounter] = useState(0);


    const increase = () => {
        setCounter(counter + 1)
    }

    return (
        <SafeAreaView style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <Text style={{ fontSize: 70, fontWeight: 800 }}>{counter}</Text>
            {/* <Button title='Increase' onPress={increase}></Button> */}
            <Button title='Increase' onPress={() => increase()}></Button>

        </SafeAreaView>
    )
}

export default StateIntro




