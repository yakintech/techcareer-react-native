import { View, Text, SafeAreaView, TextInput, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const StateTextInput = () => {

    //Bu state ile inputtaki datayı yakalayacağım.
    const [cityName, setcityName] = useState('')
    const [cities, setcities] = useState([]);

    const add = () => {

        if (cityName != "") {

            //böyle bir şehir var mı kontrol ediyorum. js find metodunu kullanıyorum.
            var city = cities.find(x => x == cityName);

            //eğer böyle bir şehir yoksa
            if(!city){
                setcities([...cities, cityName])
                setcityName('');
            }

        }

    }

    const clear = () => {
        setcities([]);
    }

    return (
        <SafeAreaView>
            <Button title='Clear' onPress={clear}></Button>
            <Text style={{ fontSize: 35 }}>Length: {cities.length}</Text>
            <TextInput value={cityName} onChangeText={setcityName} style={styles.input} />
            <Button title='add' onPress={add}></Button>
            {
                cities && cities.map(item => <Text style={{ fontSize: 35 }}>{item}</Text>)
            }
        </SafeAreaView>
    )
}

export default StateTextInput



const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
