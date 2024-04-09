import React from "react";
import { withLayoutContext } from "expo-router";
import {
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
  createMaterialTopTabNavigator,
} from "@react-navigation/material-top-tabs";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import { mainColor } from "../../constants/colors";
import { Dimensions } from "react-native";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

const RootLayout = () => {
  return (
    <MaterialTopTabs
      initialLayout={{ width: Dimensions.get("window").width }}
      screenOptions={{
        tabBarActiveTintColor: mainColor,
        tabBarInactiveTintColor: "black",
        tabBarLabelStyle: {
          textAlign: "left",
          width: Dimensions.get("window").width / 2 - 70,
        },
        tabBarIndicatorStyle: {
          backgroundColor: mainColor,
        },
      }}
    >
      <MaterialTopTabs.Screen
        name={"index"}
        options={{ title: "Специалисты" }}
      />
      <MaterialTopTabs.Screen name={"answers"} options={{ title: "Ответы" }} />
    </MaterialTopTabs>
  );
};

export default RootLayout;
