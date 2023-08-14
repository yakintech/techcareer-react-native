import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { List } from 'react-native-paper'

const ProductList = ({ products }) => {

  // const { products } = props

  const renderItem = ({ item }) => {
    return <List.Item
      title={item.name}
      description={"Price: " + item.unitPrice}
      left={props => <List.Icon {...props} icon="folder" />}
    />
  }

  return (<>
    <FlatList
      data={products}
      renderItem={renderItem}
    />
  </>
  )
}

export default ProductList
