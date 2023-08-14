import { View, Text } from 'react-native'
import React from 'react'

const ProductTitle = (props) => {
    return (
        <View>
            <Text>Length: {props.count}</Text>
        </View>
    )
}

export default ProductTitle

