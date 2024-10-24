import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  Animated,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { sliderImg } from "../common/Constant"; // Ensure this data is correct
import Color from "../common/Color";
import { RFValue } from "react-native-responsive-fontsize";

const { width } = Dimensions.get("window");

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null); // Create a reference for the FlatList

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % sliderImg.length;
        scrollToIndex(nextIndex); 
        return nextIndex;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollToIndex = (index) => {
    flatListRef.current.scrollToIndex({ animated: true, index }); 
  };

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    {
      useNativeDriver: false,
      listener: (event) => {
        const index = Math.floor(event.nativeEvent.contentOffset.x / width);
        setCurrentIndex(index);
      },
    }
  );

  const renderItem = ({ item }) => {
    return (
      <LinearGradient
        colors={[Color.LIGHT_COLOR, item.color1, item.color2]}
        style={styles.gradient}
      >
        <View style={styles.slide}>
          <View style={styles.textContainer}>
            <Text style={styles.off}>{item.off}</Text>
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <Image source={item.img} style={styles.image} resizeMode="contain" />
        </View>
      </LinearGradient>
    );
  };

  return (
    <View style={styles.container}>
      <Animated.FlatList
        ref={flatListRef} 
        data={sliderImg}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />
      {/* <View style={styles.indicatorContainer}>
        {sliderImg.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentIndex === index
                ? styles.activeIndicator
                : styles.inactiveIndicator,
            ]}
          />
        ))}
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: 150,
    borderRadius: RFValue(20),
    alignSelf: "center",
    overflow: "hidden",
    position: "relative",
  },
  slide: {
    width: width,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: RFValue(10),
  },
  image: {
    width: 180,
    height: 180,
  },
  gradient: {
    // flex: 1,
    // justifyContent: "center",
    // padding: 20,
  },
  textContainer: {
    flex: 1,
    marginHorizontal: RFValue(18),
  },
  title: {
    color: Color.WHITE_COLLOR,
    fontSize: RFValue(18),
    fontWeight: "bold",
  },
  off: {
    color: Color.DARK_BLUE,
    fontSize: RFValue(22),
    fontWeight: "bold",
  },
  indicatorContainer: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: Color.WHITE_COLLOR,
  },
  inactiveIndicator: {
    backgroundColor: Color.BLACK_COLOR,
  },
});

export default Slider;
