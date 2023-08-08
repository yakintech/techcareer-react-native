import { Text, View } from "react-native";

export default function Box({ boxColor, title, description }) {

    return <View style={{ backgroundColor: boxColor, flex: 2, borderRadius: 20, justifyContent: 'center', paddingLeft: 20, marginBottom: 20 }}>
        <Text style={{ color: '#fff', fontSize: 28 }}>{title}</Text>
        <Text style={{ color: '#fff' }}> {description}</Text>
    </View>
}

