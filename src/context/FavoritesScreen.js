import { View, Text, FlatList } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FavoritesContext } from './FavoritesContext'
import { Button } from 'react-native-paper'

const FavoritesScreen = () => {

  const { favorites, setfavorites } = useContext(FavoritesContext)

  const removeFav = (item) => {

    var filteredFavorites = favorites.filter(q => q.id != item.id);
    setfavorites([...filteredFavorites]);
  }


  return (<>
    <SafeAreaView>
      <Text>Favorites Count: {favorites.length}</Text>
      <Button onPress={() => setfavorites([])}>Remove All</Button>

      <FlatList
        data={favorites}
        renderItem={({ item }) => <>
          <Text>{item.name}</Text>
          <Button onPress={() => removeFav(item)}>Remove</Button>
        </>}
      />
    </SafeAreaView>
  </>
  )
}

export default FavoritesScreen