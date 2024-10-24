import {
  FlatList,
  Image,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import Color from "../common/Color";
import String from "../common/String";
import { catList, sortList } from "../common/Constant";
import LinearGradient from "react-native-linear-gradient";
import styles from "../common/styles";
import ProductList from "../components/ProductList";
import CategoryList from "../components/CategoryList";
import Slider from "../components/Slider";
import axios from "axios";

const HomeScreen = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSort, setSelectedSort] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = "https://fakestoreapi.com/products";
        const response = await axios.get(url);
        setProductData(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} color={Color.THEME_COLOR} />
      </View>
    );
  }

  const sortProducts = (data) => {
    console.log("selectedSort", selectedSort);
    if (!selectedSort) return data;
    let sortedData = [...data];
    if (selectedSort === 2) {
      console.log();
      sortedData.sort((a, b) => b.rating.rate - a.rating.rate);
    } else if (selectedSort === 1) {
      sortedData.sort((a, b) => b.rating.count - a.rating.count);
    }
    return sortedData;
  };

  const handleSortSelect = (item) => {
    console.log(item, "item");
    setSelectedSort((prev) => (prev === item.id ? null : item.id));
  };

  const sortedProductData = sortProducts(productData);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor={Color.LINEAR1_COLOR} />
      <LinearGradient
        colors={[Color.LINEAR1_COLOR, Color.THEME_COLOR]}
        style={styles.gradientBackground}
      >
        <View style={{ paddingBottom: 10, marginBottom: 10 }}>
          <View style={styles.headerContainer}>
            <View style={styles.addressContainer}>
              <Image
                source={require("../assets/images/loc.png")}
                style={styles.locationIcon}
              />
              <Text style={styles.addressText}>{String.address_txt}</Text>
            </View>
            <Image
              source={require("../assets/images/user.png")}
              style={styles.userIcon}
            />
          </View>

          <View style={styles.searchFilterContainer}>
            <View style={styles.searchContainer}>
              <Image
                source={require("../assets/images/search.png")}
                style={styles.searchIcon}
              />
              <TextInput
                style={styles.searchInput}
                placeholder={String.search_txt}
                placeholderTextColor={Color.GREY_COLOR}
              />
              <View style={styles.mic_div}>
                <View style={styles.mic_dv} />
                <Image
                  source={require("../assets/images/mic.png")}
                  style={styles.micIcon}
                  resizeMode="contain"
                />
              </View>
            </View>
            <View style={styles.filterContainer}>
              <Image
                source={require("../assets/images/filter.png")}
                style={styles.filterIcon}
              />
            </View>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.View2}>
        <Slider />

        <Text style={styles.like_txt}>{String.lik_txt}</Text>

        <FlatList
          horizontal
          data={catList}
          renderItem={({ item }) => <CategoryList item={item} />}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: RFValue(10) }}
        />

        <View>
          <Text style={styles.all_res}>All Restaurant</Text>

          <FlatList
            horizontal
            data={sortList}
            renderItem={({ item }) => (
              <View>
                <TouchableOpacity
                  onPress={() => handleSortSelect(item)}
                  style={[
                    styles.sortitemContainer,
                    selectedSort === item.id && {
                      borderColor: Color.THEME_COLOR,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.sortitemText,
                      selectedSort === item.id && { color: Color.THEME_COLOR },
                    ]}
                  >
                    {item.title}
                  </Text>
                </TouchableOpacity>

                {selectedSort === item.id && (
                  <TouchableOpacity
                    onPress={() => handleSortSelect(item)}
                    style={{
                      alignItems: "center",
                      marginTop: RFValue(5),
                      marginEnd: RFValue(10),
                    }}
                  >
                    <Image
                      source={require("../assets/images/x-mark.png")}
                      style={{
                        width: RFValue(15),
                        height: RFValue(15),
                        tintColor: Color.GREY_COLOR,
                      }}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                )}
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
          />
        </View>

        <FlatList
          data={sortedProductData}
          renderItem={({ item }) => <ProductList item={item} />}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.ProlistContainer}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
