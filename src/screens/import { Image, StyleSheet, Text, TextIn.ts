import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import Color from "../common/Color";
import String from "../common/String";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: RFValue(10),
          alignItems: "center",
          marginVertical: RFValue(8),
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../assets/images/loc.png")}
            style={{
              tintColor: Color.GREY_COLOR,
              height: RFValue(20),
              width: RFValue(20),
            }}
          />
          <Text
            style={{
              color: Color.BLACK_COLOR,
              fontWeight: "500",
              marginStart: RFValue(8),
            }}
          >
            {String.address_txt}
          </Text>
        </View>
        <Image
          source={require("../assets/images/user.png")}
          style={{
            height: RFValue(38),
            width: RFValue(38),
          }}
        />
      </View>

      <View style={styles.searchContainer}>
        <Image
          source={require("../assets/images/search.png")}
          style={{
            tintColor: Color.GREY_COLOR,
            height: RFValue(18),
            width: RFValue(18),
          }}
        />
        <TextInput
          style={styles.searchInput}
          placeholder={String.search_txt}
          placeholderTextColor={Color.GREY_COLOR}
        />
        <View
          style={{
            justifyContent: "flex-end",
            alignItems: "flex-end",
            flex: 1,
          }}
        >
          <Image
            source={require("../assets/images/mic.png")}
            style={{
              height: RFValue(20),
              width: RFValue(20),
            }}
            resizeMode="contain"
          />
        </View>
      </View>

      {/* <View style={styles.redView} />
      <View style={styles.searchContainer}>
        <Image
          source={require("../assets/images/search.png")}
          style={{
            tintColor: Color.GREY_COLOR,
            height: RFValue(20),
            width: RFValue(20),
          }}
        />
        <TextInput
          style={styles.searchInput} // Add styles for the TextInput
          placeholder="Search" // Add a placeholder for clarity
          placeholderTextColor={Color.GREY_COLOR} // Set placeholder text color
        />
      </View>
      <Text style={{ color: "white", position: "absolute", top: 50, left: 20 }}>
        Neha
      </Text>
      <View style={styles.whiteView}>
        <Text style={styles.text}>User-Wale View</Text>
      </View> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  redView: {
    flex: 1 / 5,
    backgroundColor: "grey",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    marginHorizontal: RFValue(20),
    marginTop: RFValue(10),
    padding: RFValue(5),
    borderRadius: RFValue(10),
    elevation: 1,
    borderWidth: 0.5,
    borderColor: Color.GREY_COLOR,
  },
 
  whiteView: {
    flex: 1,
    backgroundColor: "white",
    position: "absolute",
    top: "20%", // Adjust position to avoid overlap with the search bar
    left: 0,
    right: 0,
    height: "30%",
    borderTopLeftRadius: RFValue(10),
    borderTopRightRadius: RFValue(10),
  },
  text: {
    textAlign: "center",
    marginTop: RFValue(5),
    fontSize: RFValue(18),
  },
  searchInput: {
    borderColor: Color.GREY_COLOR,
    backgroundColor: Color.WHITE_COLLOR,
    height: RFValue(40),
    borderRadius: RFValue(10),
  },
});
