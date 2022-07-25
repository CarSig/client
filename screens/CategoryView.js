import React, { useRef } from "react";
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../styles/global';

const CategoryView = ({ navigation }) => {

    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.container}>
                <Text>{navigation.getParam('category')}</Text>
                <Text>{navigation.getParam('color')}</Text>
                <Text>{navigation.getParam('amount')}</Text>
            </View>
        </View>

    )
}




export default CategoryView;
