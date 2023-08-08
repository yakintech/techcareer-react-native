import { View, Text, SafeAreaView, TextInput, Button, FlatList, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const StateSample4 = () => {

  const [name, setname] = useState("");
  const [surname, setsurname] = useState('');

  const [users, setusers] = useState([]);

  const add = () => {

    let newUser = {
      name,
      surname
    }

    setusers([...users, newUser])
    setname('')
    setsurname('')

  }


  return (
    <SafeAreaView>
      <View>
        <TextInput style={styles.input} value={name} onChangeText={setname} />
      </View>
      <View>
        <TextInput style={styles.input} value={surname} onChangeText={setsurname} />
      </View>
      <View>
        <Button title='add' onPress={add}></Button>
      </View>
      <View>
        <FlatList
          data={users}
          renderItem={({item}) => <Text>{item.name} {item.surname}</Text>}
        />
      </View>
    </SafeAreaView>
  )
}

export default StateSample4


const styles = StyleSheet.create({
  input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
  },
});