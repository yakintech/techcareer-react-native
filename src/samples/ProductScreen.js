import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductTitle from './ProductTitle'
import ProductList from './ProductList'
import axios from 'axios'
import TechCareerButton from './TechCareerButton';


const ProductScreen = () => {

    const [products, setproducts] = useState([]);

    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/products')
            .then(res => {
                setproducts(res.data)
            })


    }, [])


    return (<>
        <SafeAreaView>
        
            {/* <TechCareerButton title="Başvur!" height={50} />
            <ProductTitle count={products.length} /> */}
            <ProductList products={products} />
        </SafeAreaView>

    </>
    )
}

export default ProductScreen