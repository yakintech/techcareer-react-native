import { View, Text } from 'react-native'
import React from 'react'
import LottieView from "lottie-react-native";
import { SafeAreaView } from 'react-native-safe-area-context';


const LottieSample = () => {
    return (<>
        <SafeAreaView style={{flex:1, justifyContent:'center'}}>
            <LottieView style={{ width: 300, height: 200 }} source={require("./caranimation.json")} autoPlay loop />
        </SafeAreaView>
    </>
    )
}

export default LottieSample