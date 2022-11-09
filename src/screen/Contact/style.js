import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
        width: 375,
        height: 99,
    },
    QRImg: {
        width: 256,
        height: 256,
        alignSelf: "center",
        marginTop: 70,
    },
    txt: {
        alignSelf: "center",
        marginVertical: 59,
        color: "#fff",
        fontSize: 16,
        zIndex: 10,
        fontFamily: "CairoSemiBold",
        position: "absolute",
    },
    ContactContainer: {
        marginVertical: 25,
        flexDirection: "column",
        alignItems: "flex-end",
        paddingHorizontal: 52,
    },
    headText: {
        fontSize: 19,
        fontFamily: 'CairoBold'
    },
    texts: {
        fontSize: 17,
        fontFamily: 'CairoRegular',
        marginVertical: 2
    },
});
export default styles;