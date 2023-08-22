import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { FavoritesContext } from '../../../context/FavoritesContext';
import { Button } from 'react-native-paper';

const ProductDetailScreen = ({ route }) => {

  const { item } = route.params;

  const { favorites, setfavorites } = useContext(FavoritesContext);


  const add = (item) => {
      setfavorites([...favorites, item])
  }

  const remove = (item) => {
    var filteredFavorites = favorites.filter(q => q.id != item.id);
    setfavorites([...filteredFavorites]);
  }

  const buttonCheck = () => {
    var isFav = favorites.find(q => q.id == item.id);

    if (isFav) {
      return <Button onPress={() => remove(item)}>Remove</Button>
    }
    else {
      return <Button onPress={() => add(item)}>Add</Button>
    }
  }

  return (
    <View>
      <Text>Name: {item.name}</Text>
      <Text>Price: {item.unitPrice}</Text>
      <Text>Stock: {item.unitsInStock}</Text>
      {buttonCheck()}
    </View>
  )
}

export default ProductDetailScreen