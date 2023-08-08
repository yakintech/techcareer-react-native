import { Text, View } from "react-native";


export default function IfElseSample() {

    var onlineStatus = true;


    return <View>
        {
            onlineStatus == true ? <Text>User Online</Text> : <Text>User Offline</Text>
        }

    </View>

}