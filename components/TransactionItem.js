import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const TransactionItem = ({ item, color }) => {
    const styles = StyleSheet.create({
        itemContainer: {
            flex: 1,
            flexDirection: 'row',
            flexGrow: 1,
            flexShrink: 1,
            backgroundColor: '#fff',
            justifyContent: 'space-between',
            borderWidth: 1,
            borderColor: `${color}`,
            padding: 10,

        }
    })
    return (
        <TouchableOpacity>

            <View style={styles.itemContainer}>

                <Text>{item.amount}</Text>
                <Text>{item.date}</Text>
                <Text>{item.description}</Text>
            </View>
        </TouchableOpacity >
    )
}



export default TransactionItem

