import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20

    },
    danger: {
        color: "#ff0000"
    },
    listItem: {
        padding: 15,
        backgroundColor: '#efefef',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        display: 'flex',
        flexDirection: 'row',
    },
    listItemView: {
        flexDirection: 'row',

    },
    btn: {
        display: "inline-block",
        fontWeight: 500,
        padding: 9,
        margin: 5,
        marginTop: 14,
        border: "none",
        fontSize: 1.3,
        backgroundColor: "#0097a7",
    },
    btnText: {
        color: "white",
        fontSize: 23,
        textAlign: "center"
    },
    header: {

        height: 60,
        padding: 15,
        backgroundColor: "darkslateblue",
    },
    text: {
        color: "white",
        fontSize: 23,
        textAlign: "center"
    },
    input: {
        height: 60,
        padding: 8,
        fontSize: 20,
        backgroundColor: "#fff"
    }
})
