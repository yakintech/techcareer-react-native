import { View, Text } from 'react-native'
import React from 'react'

const ProductDetailScreen = ({ route }) => {

  const { item } = route.params;

  return (
    <View>
      <Text>Name: {item.name}</Text>
      <Text>Price: {item.unitPrice}</Text>
      <Text>Stock: {item.unitsInStock}</Text>
    </View>
  )
}

export default ProductDetailScreen