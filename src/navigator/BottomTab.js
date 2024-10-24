import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import DinningScreen from "../screens/DinningScreen";
import WishlistScreen from "../screens/WishlistScreen";
import RecorderScreen from "../screens/RecorderScreen";
import CartScreen from "../screens/CartScreen";
import { RFValue } from "react-native-responsive-fontsize";

const tab1 = require("../assets/images/tab1.png");
const tab2 = require("../assets/images/tab2.png");
const tab3 = require("../assets/images/tab3.png");
const tab4 = require("../assets/images/tab4.png");
const tab5 = require("../assets/images/tab5.png");

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconSource;

            // Use the same image for both states
            if (route.name === "Home") {
              iconSource = tab1;
            } else if (route.name === "Dining") {
              iconSource = tab2;
            } else if (route.name === "Wishlist") {
              iconSource = tab3;
            } else if (route.name === "Recorder") {
              iconSource = tab4;
            } else if (route.name === "Cart") {
              iconSource = tab5;
            }

            return (
              <Image
                source={iconSource}
                style={{
                  width: RFValue(20),
                  height: RFValue(20),
                  tintColor: focused ? "red" : "grey",
                }}
                resizeMode="contain"
              />
            );
          },
          tabBarActiveTintColor: "#e91e63",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            height: RFValue(60), // Adjust the height if needed
            backgroundColor: "#fff",
            borderTopWidth: 0,
            borderTopLeftRadius: RFValue(15),
            borderTopRightRadius: RFValue(15),
          },
          tabBarLabelStyle: {
            marginTop: RFValue(5),
            fontSize: 12,
          },
          tabBarItemStyle: {
            padding: 5,
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ tabBarLabel: "Delivery", headerShown: false }}
        />
        <Tab.Screen
          name="Dining"
          component={DinningScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Wishlist"
          component={WishlistScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Recorder"
          component={RecorderScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  shadow: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: RFValue(40), // Set height for the shadow effect
    backgroundColor: "white",
    shadowColor: "#000", // Shadow color
    shadowOffset: {
      width: 0,
      height: 2, // Shadow height
    },
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 3.5, // Shadow blur radius
    elevation: 5, // Elevation for Android
  },
});

export default BottomTab;
