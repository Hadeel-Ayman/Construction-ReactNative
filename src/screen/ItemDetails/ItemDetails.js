import { View, Image, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import styles from "./Style";
const ItemDetails = () => {
  const { params } = useRoute();
  const { item } = params;

  return (
    <View style={styles.container}>
      <Image source={item.img} />
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );
}

export default ItemDetails;