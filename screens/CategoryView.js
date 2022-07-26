import React, { useRef } from "react";
import { StyleSheet, Text, Touchable, TouchableOpacity, View, FlatList } from 'react-native';
import TransactionItem from "../components/TransactionItem";
import { globalStyles } from '../styles/global';

const CategoryView = ({ navigation }) => {

    return (
        <View style={globalStyles.container}>
            <View >
                <Text>{navigation.getParam('category')}</Text>
                <Text>{navigation.getParam('color')}</Text>

            </View>

            <FlatList data={navigation.getParam("transactions")} renderItem={({ item }) => (
                <TransactionItem style={globalStyles.container} item={item} color={navigation.getParam('color')} />


            )} />
        </View>

    )
}





export default CategoryView;
