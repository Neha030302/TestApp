import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../common/styles";
import Color from "../common/Color";
import LinearGradient from "react-native-linear-gradient";

const CategoryList = ({ item }) => {
  return (
    <TouchableOpacity style={styles.itemContainer}>
      <LinearGradient
        colors={[Color.LIGHT_COLOR, Color.LINEAR2_COLOR]}
        style={styles.gradient}
      >
        <Image
          source={item.img}
          style={styles.itemImage}
          resizeMode="contain"
        />
        <Text style={styles.itemText}>{item.title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CategoryList;
