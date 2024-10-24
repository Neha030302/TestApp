import { Text, View, Image, ImageBackground, FlatList } from "react-native";
import React from "react";
import styles from "../common/styles";
import Color from "../common/Color";
import LinearGradient from "react-native-linear-gradient";

const ProductList = ({ item }) => {
//   console.log("item", item);
  return (
    <View style={styles.productCard}>
      <ImageBackground
        source={{ uri: item.image }}
        style={styles.productImage}
        resizeMode="contain"
      >
        <Text style={styles.quantityText}>Rs.{item.price}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>{item.rating.rate}</Text>
          <Image
            source={require("../assets/images/star.png")}
            style={styles.starIcon}
          />
        </View>

        <LinearGradient
          colors={["transparent", Color.BLACK_COLOR]}
          style={styles.imge_grad}
        >
          <View style={styles.free_del_view}>
            <View style={styles.bikeContainer}>
              <Image
                source={require("../assets/images/bike.png")}
                style={styles.bikeIcon}
                resizeMode="contain"
              />
              <Text style={styles.deliveryText}>{item.del}</Text>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>

      <View style={styles.timeDurationContainer}>
        <View style={{ width: "70%" }}>
          <Text style={styles.titleText}>{item.title}</Text>
        </View>

        <View
          style={[
            styles.nameView,
            { width: "30%", justifyContent: "flex-end" },
          ]}
        >
          <Image
            source={require("../assets/images/place.png")}
            style={styles.place_iocn}
          />
          <Text style={styles.durationText}> {item.duration} 2 km</Text>
        </View>
      </View>

      <View style={styles.timeDurationContainer}>
        <FlatList
          data={["Blue", "Black", "Green"]}
          horizontal
          renderItem={({ item: subTag }) => (
            <Text style={styles.subTagText}>{subTag}</Text>
          )}
          keyExtractor={(subTag, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.subTagList}
        />
        <View style={styles.timeContainer}>
          <Image
            source={require("../assets/images/clock.png")}
            style={styles.clockIcon}
            resizeMode="contain"
          />
          <Text style={styles.timeText}>{item.time} 30-45 mins</Text>
        </View>
      </View>

      <View style={styles.dottedDivider} />

      <View style={styles.offerDeliveryContainer}>
        <Text style={styles.offerText}>{item.offer}</Text>
      </View>
    </View>
  );
};

export default ProductList;
