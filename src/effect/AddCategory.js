import { View, Text, TextInput, StyleSheet, Button, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';
import { Alert } from 'react-native';

const AddCategory = () => {
  const [name, setname] = useState('');
  const [description, setdescription] = useState('');


  const add = () => {

    var newCategory = {
      name: name,
      description: description
    }

    axios.post('https://northwind.vercel.app/api/categories', newCategory)
    .then(res => {
      Alert.alert("Yeni bir kategori eklendi!!")
    })
  }

  return (
    <SafeAreaView>
      <View>
        <TextInput style={styles.input} value={name} onChangeText={setname} />
      </View>
      <View>
        <TextInput style={styles.input} value={description} onChangeText={setdescription} />
      </View>
      <View>
        <Button title="Add" onPress={add}></Button>
      </View>
    </SafeAreaView>
  )
}

export default AddCategory

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});