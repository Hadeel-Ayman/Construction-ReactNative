import React, { useEffect, useState } from "react";
import styles from "./style";
import { View, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: 0,
    image: require("../../../assets/images/Group.png"),
  },
  {
    id: 1,
    image: require("../../../assets/images/card2.png"),
  },
  {
    id: 2,
    image: require("../../../assets/images/card2.png"),
  },
];


const OnBoardingScreen  = () => {
  const [showSlider] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("Navigation");
    }, 4000);

  })
  const { navigate } = useNavigation();
  const RenderItem = ({ item }) => {
    return (
      <View style={styles.renderView}>
        <Image source={item.image} style={styles.img} />
      </View>
    );
  };

  return (
    <>
      {showSlider ? (
        <View style={styles.container}>
        </View>
      ) : (
        <AppIntroSlider
          keyExtractor={(item) => item.id}
          data={data}
          renderItem={RenderItem}
          activeDotStyle={{
            backgroundColor: "#0C0303",
            width: 14,
            height: 14,
            borderRadius: 100

          }}
        />
      )}
    </>
  );
};

export default OnBoardingScreen ;


