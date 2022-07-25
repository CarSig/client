import React, { useRef } from "react";
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';


const AddTransactionView = () => {

    return (
        <View style={styles.container}>
            <Text>AddTransactionView</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    }
})


export default AddTransactionView;