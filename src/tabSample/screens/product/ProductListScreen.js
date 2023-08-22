import { View, Text, FlatList, Pressable } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { Button } from 'react-native-paper';
import { FavoritesContext } from '../../../context/FavoritesContext';

const ProductListScreen = ({ navigation }) => {

  const [products, setproducts] = useState([]);
  const {favorites, setfavorites} = useContext(FavoritesContext)

  useEffect(() => {

    axios.get('https://northwind.vercel.app/api/products')
      .then(res => {
        setproducts(res.data);
      })

  }, [])

  const goToDetail = (item) => {
    navigation.navigate('ProductDetail', { item: item })
  }

  const addToFav = (item) => {
    setfavorites([...favorites, item])
  }

  const removeFav = (item) => {
    var filteredFavorites = favorites.filter(q => q.id != item.id);
    setfavorites([...filteredFavorites]);
  }
  
  const renderItem = ({ item }) => {

    var isFav = favorites.find(q => q.id == item.id);

    return <>
      <Pressable onPress={() => goToDetail(item)}>
        <Text>{item.name}</Text>
      </Pressable>
     {
      isFav ?  <Button onPress={() => removeFav(item)}>Remove to Fav</Button> :  <Button onPress={() => addToFav(item)}>Add To Fav</Button>
     }
    </>
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