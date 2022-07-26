import React, { useRef, useState } from "react";
import { StyleSheet, Text, Touchable, TouchableOpacity, View, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';
import { dummyTransactions, uniqueCategories } from "./transactionsTEMP"


const Home = ({ navigation }) => {
    const [transactions, setTransactions] = useState([]);
    const [categories, setCategories] = useState([
        { key: 1, category: "food", color: "red", amount: 100 },
        { key: 2, category: "bar", color: "blue", amount: 1210 },
        { key: 3, category: "pet", color: "green", amount: -100 },
        { key: 4, category: "travel", color: "yellow", amount: -140 },
    ])


    return (
        <View style={globalStyles.container}>


            <FlatList data={uniqueCategories} renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('CategoryView', item)}>
                    <Text style={globalStyles.titleText}>{item.category}</Text>
                </TouchableOpacity>
            )} />
        </View>

    )
}



export default Home;
