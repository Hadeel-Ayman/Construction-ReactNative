import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  img: {
    height: 105,
  },
  header: {
    alignSelf: "center",
    marginVertical: 60,
    color: "#fff",
    fontSize: 16,
    zIndex: 10,
    position: "absolute",
    fontFamily: "CairoBold",
  },
  listHeaderComponent: {
    paddingHorizontal: 23,
    alignItems: "flex-end",
  },
  index: {
    fontSize: 16,
    fontFamily: "CairoSemiBold",
    marginHorizontal: -6,
  },
  renderItem: {
    height: 136,
    width: 159,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    marginHorizontal: 10,
    marginVertical: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 5,
    paddingHorizontal: 5,
  },
  text: {
    textAlign: "center",
    fontFamily: "CairoSemiBold",
    fontSize: 14,
  },
});

export default styles;
