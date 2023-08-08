import { View, Text, FlatList, SafeAreaView, Pressable } from 'react-native'
import React, { useState } from 'react'
import { categories } from '../components/categories'
import { Button } from 'react-native'

const StateSample3 = () => {

    const [categoryList, setcategoryList] = useState(categories);
    const [hasSort, sethasSort] = useState(false);

    const sortByName = () => {
        if(hasSort == false){
            categoryList.sort((a, b) => a.name.localeCompare(b.name));
            sethasSort(true);
        }
        else{
            categoryList.sort((a, b) => b.name.localeCompare(a.name));
            sethasSort(false);
        }
        setcategoryList([...categoryList]);
    }

    const deleteCategory = (id) => {

        var filteredCategories = categoryList.filter(q => q.id != id);
        setcategoryList([...filteredCategories])

    }
    
    const renderItem = ({item}) => <Pressable onPress={() => deleteCategory(item.id)}><Text style={{fontSize:40}}>{item.name}</Text></Pressable>

    return (
        <SafeAreaView>
            <Text>Length: {categoryList.length}</Text>
            <Button title='Sort by name' onPress={sortByName}></Button>
            <FlatList
                data={categoryList}
                renderItem={renderItem}
            />
        </SafeAreaView>
    )
}

export default StateSample3

