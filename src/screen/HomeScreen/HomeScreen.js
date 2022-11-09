import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  Image,
  ImageBackground,
  FlatList,
  useWindowDimensions,
  Pressable,
} from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
const img = require("../../../assets/images/rectangle.png");

const RenderItem = ({ item }) => {
  const { navigate } = useNavigation();
  return (
    <Pressable onPress={() => navigate("ItemDetails", { item })}>
      <View style={styles.renderItem}>
        <View style={{ height: "40%" }}>
          <Image source={item.img} />
        </View>
        <View style={{ height: "40%" }}>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    </Pressable>
  );
};
const data = [
  {
    id: 1,
    img: require("../../../assets/images/icon1.png"),
    text: " متطلبات تأسيس منشاة مقاولات",
  },
  {
    id: 2,
    img: require("../../../assets/images/icon2.png"),
    text: "التعريف بقطاع المقاولات ",
  },
  {
    id: 3,
    img: require("../../../assets/images/icon3.png"),
    text: " قواعد وإجراءات أساسية بشأن التعاقد ",
  },
  {
    id: 4,
    img: require("../../../assets/images/icon4.png"),
    text: "تراخيص مزاولة نشاط المقاولات",
  },
  {
    id: 5,
    img: require("../../../assets/images/icon5.png"),
    text: "منصات الكترونية في خدمة المقاول",
  },
  {
    id: 6,
    img: require("../../../assets/images/icon6.png"),
    text: "الجهات ذات\nالعلاقة",
  },
  {
    id: 7,
    img: require("../../../assets/images/icon7.png"),
    text: "آليات تسليم مشاريع المقاولات",
  },
  {
    id: 8,
    img: require("../../../assets/images/icon8.png"),
    text: "خطة عمل المشروعات وتدفقاتها المالية",
  },
  {
    id: 9,
    img: require("../../../assets/images/icon9.png"),
    text: "علاقة المقاول مع مكاتب وإجراءات السلامة",
  },
  {
    id: 10,
    img: require("../../../assets/images/icon10.png"),
    text: "أنظمة عقود المقاولات ",
  },
  {
    id: 11,
    img: require("../../../assets/images/icon11.png"),
    text: "لجنة المقاولات :\n رسالتها- أهدافها – إنجازاتها",
  },
  {
    id: 12,
    img: require("../../../assets/images/icon12.png"),
    text: "الجانب الاجتماعي والوطني",
  },
];

const HomeScreen = () => {
  const { width } = useWindowDimensions();
  return (
    <>
      <StatusBar style="light" />
      <View>
        <ImageBackground source={img} style={styles.img}>
          <Text style={styles.header}>المقاولات</Text>
        </ImageBackground>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        numColumns={2}
        ListHeaderComponent={
          <View style={[styles.listHeaderComponent, { width }]}>
            <Text style={styles.index}>الفهرس</Text>
          </View>
        }
        contentContainerStyle={{
          alignItems: "center",
        }}
        renderItem={({ item }) => <RenderItem item={item} />}
      />
    </>
  );
};
export default HomeScreen;
