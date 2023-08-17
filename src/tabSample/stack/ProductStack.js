import { View, Text } from 'react-native'
import React from 'react'
import ProductListScreen from '../screens/product/ProductListScreen'
import ProductDetailScreen from '../screens/product/ProductDetailScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const ProductStackScreens = createNativeStackNavigator();


const ProductStack = () => {
  return (<>
    <ProductStackScreens.Navigator>
      <ProductStackScreens.Screen name="ProductList" component={ProductListScreen} />
      <ProductStackScreens.Screen name="ProductDetail" component={ProductDetailScreen} />

    </ProductStackScreens.Navigator>
  </>
  )
}

export default ProductStack