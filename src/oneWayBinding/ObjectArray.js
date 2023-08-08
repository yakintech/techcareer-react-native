import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const ObjectArray = () => {

    var products = [
        {
            id: 1,
            name: "Samsung S5"
        },
        {
            id: 2,
            name: "Samsung S6"
        },
        {
            id: 3,
            name: "Samsung S7"
        },
    ]


    return (
        <SafeAreaView>
            {
                products.map((product) => <View>
                    <Text style={{fontSize:35}}>{product.name}</Text>
                    <Text style={{fontSize:35}}>{product.id}</Text>
                </View>)
            }
        </SafeAreaView>
    )
}

export default ObjectArray