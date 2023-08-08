
import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const ArraySample = () => {

    var cities = ["İstanbul", "Ankara", "İzmir", "Bursa", "Antalya"]

  return (
    <SafeAreaView>
      {
        cities.map((city, index) => <Text style={{fontSize:33}}>{city} - {index}</Text>)
      }
    </SafeAreaView>
  )
}

export default ArraySample