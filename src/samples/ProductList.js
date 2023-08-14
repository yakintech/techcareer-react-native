import { View, Text, FlatList } from 'react-native'
import React from 'react'

const ProductList = ({ products }) => {

  // const { products } = props

  return (<>
    <FlatList
      data={products}
      renderItem={({ item }) => <Text>{item.name}</Text>}
    />
  </>
  )
}

export default ProductList
