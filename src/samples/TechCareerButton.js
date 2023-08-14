import { View, Text, Button, Pressable } from 'react-native'
import React from 'react'

const TechCareerButton = ({ width, height, title }) => {
    return (<>
        <Pressable>
            <Text style={{ backgroundColor: '#00D076', width: width, height: height }}>{title}</Text>
        </Pressable>
    </>
    )
}

export default TechCareerButton

TechCareerButton.defaultProps = {
    width:200,
    height:100
}