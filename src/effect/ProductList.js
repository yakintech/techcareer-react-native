import { View, Text, Alert, FlatList, SafeAreaView, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const ProductList = () => {
    const [products, setproducts] = useState([]);
    const [error, seterror] = useState(null);
    const [loading, setloading] = useState(true)


    useEffect(() => {
        //fonksiyon başarılıysa then içerisine düşer. hata alırsa catch içerisine düşer
        axios.get('https://northwind.vercel.app/api/products')
            .then(res => {
                setproducts(res.data);
                setloading(false)
            })
            .catch(err => {
                setloading(false)
                Alert.alert("İşlem sırasında bir hata meydana geldi");
                seterror(err);
            })

    }, [])


    return (
        <SafeAreaView>
            {
                loading == true ?   <ActivityIndicator /> : <FlatList
                    data={products}
                    renderItem={({ item }) => <Text>{item.name}</Text>}
                />
            }

        </SafeAreaView>
    )
}

export default ProductList



            // {
            //     error && <Text>{error.response.status}</Text>
            // }