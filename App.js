import { SafeAreaView, ScrollView, Text, View, Image, Button, Pressable } from 'react-native';
import Title from './src/components/Title';
import Box from './src/components/Box';
import OneWay from './src/oneWayBinding/OneWay';
import IfElseSample from './src/oneWayBinding/IfElseSample';
import ArraySample from './src/oneWayBinding/ArraySample';
import ObjectArray from './src/oneWayBinding/ObjectArray';

export default function App() {


  return <ObjectArray/>

  return <OneWay/>
  return (
    <SafeAreaView style={{ paddingLeft: 20, paddingRight: 20, flex: 1 }}>

      <Title/>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 35, fontWeight: 500 }}>Learn</Text>
      </View>

      <View style={{ flex: 1 }}>
        <Text>Choose the part of the body</Text>
      </View>

      <Box boxColor='#EB7562' title='Head && Face' description='11 diseases' />
      <Box boxColor='#F1982E' title='Back && Neck' description='9 diseases' />
      <Box boxColor='#317389' title='Elbow && Shoulders' description='12 diseases' />
      <Box boxColor='#8DC3BB' title='Hand && Arm' description='2 diseases' />

    </SafeAreaView>
  );


}


