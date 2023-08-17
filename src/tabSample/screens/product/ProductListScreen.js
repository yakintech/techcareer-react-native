import { View, Text, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const ProductListScreen = ({navigation}) => {

  const [products, setproducts] = useState([]);

  useEffect(() => {

    axios.get('https://northwind.vercel.app/api/products')
      .then(res => {
        setproducts(res.data);
      })

  }, [])

  const goToDetail = (item) => {
    navigation.navigate('ProductDetail', {item:item})
  }

  const renderItem = ({item}) => {
    return <Pressable onPress={() => goToDetail(item)}>
      <Text>{item.name}</Text>
    </Pressable>
  }

  return (<>
    <FlatList
      data={products}
      renderItem={renderItem}
    />
  </>
  )
}

export default ProductListScreen