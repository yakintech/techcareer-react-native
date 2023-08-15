import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { axiosInstance } from './axiosInstance';
import { baseService } from '../service/baseService';

const SupplierPage = () => {
    const [suppliers, setsuppliers] = useState([]);
    const [loading, setloading] = useState(true)


    useEffect(() => {

        // axiosInstance.get('/api/suppliers')
        //     .then(res => {
        //         setsuppliers(res.data);
        //         setloading(false)
        //     })
        //     .catch(err => {
        //         console.log('ERror', err);
        //     })

       var data =  baseService.getAll();
       setsuppliers(data)

    }, [])



    return (<>
        <SafeAreaView>
            {
                loading ? <ActivityIndicator/> :   <FlatList
                data={suppliers}
                renderItem={({item}) => <Text>{item.companyName}</Text>}
            />
            }
          
        </SafeAreaView>
    </>
    )
}

export default SupplierPage