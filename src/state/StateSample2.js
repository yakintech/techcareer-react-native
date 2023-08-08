import { View, Text, SafeAreaView, Button } from 'react-native'
import React, { useState } from 'react'

const StateSample2 = () => {

    const [numbers, setnumbers] = useState([1, 2, 3]);

    const addRandom = () => {
        var randomNumber = Math.floor(Math.random() * 99999);
        const newNumbers = [...numbers, randomNumber];

        // setnumbers(newNumbers);
        setnumbers([...numbers, randomNumber])
    }

    return (
        <SafeAreaView>
            <Text style={{ fontSize: 40 }}>Length: {numbers.length}</Text>
            <Button title='Add Random Number' onPress={addRandom}></Button>
            {
               numbers && numbers.map(item => <Text style={{ fontSize: 40 }}>{item}</Text>)
            }
        </SafeAreaView>
    )
}

export default StateSample2