import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation, title }) {
    const openMenu = () => {
        navigation.openDrawer();
    }


    return (
        <View style={styles.header}>
            <MaterialIcons name="menu" size={28} color="#444" style={styles.icon} onPress={openMenu} />
            <View>
                <Text style={styles.headerText}>{title}</Text></View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#eee",
        letterSpacing: 1,
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
        letterSpacing: 1,
    },
    icon: {
        position: "absolute",
        right: 230,

    }
});

